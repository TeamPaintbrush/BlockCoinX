import React, { useState } from 'react';
import openaiService, { ImageAnalysisResult } from '../../../services/openai/openaiService';
import styles from './OpenAIAnalysis.module.css';

interface OpenAIAnalysisProps {
  onAnalysisComplete?: (result: ImageAnalysisResult) => void;
}

const OpenAIAnalysis: React.FC<OpenAIAnalysisProps> = ({ onAnalysisComplete }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<ImageAnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setError(null);
      setAnalysisResult(null);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      setError('Please select an image file first');
      return;
    }

    setIsAnalyzing(true);
    setError(null);

    try {
      const result = await openaiService.analyzeImage(selectedFile);
      setAnalysisResult(result);
      onAnalysisComplete?.(result);
    } catch (err) {
      setError('Failed to analyze image. Please try again.');
      console.error('Analysis error:', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>AI Image Analysis</h2>
        <p>Upload an image for GPT-4 Vision analysis</p>
      </div>

      <div className={styles.uploadSection}>
        <label className={styles.fileLabel}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className={styles.fileInput}
          />
          <div className={styles.uploadButton}>
            {selectedFile ? 'Change Image' : 'Choose Image'}
          </div>
        </label>

        {selectedFile && (
          <div className={styles.selectedFile}>
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Selected"
              className={styles.preview}
            />
            <p>{selectedFile.name}</p>
          </div>
        )}
      </div>

      <button
        onClick={handleAnalyze}
        disabled={!selectedFile || isAnalyzing}
        className={styles.analyzeButton}
      >
        {isAnalyzing ? 'Analyzing...' : 'Analyze Image'}
      </button>

      {error && (
        <div className={styles.error}>
          {error}
        </div>
      )}

      {analysisResult && (
        <div className={styles.result}>
          <h3>Analysis Result</h3>
          <div className={styles.analysisText}>
            {analysisResult.analysis}
          </div>
        </div>
      )}
    </div>
  );
};

export default OpenAIAnalysis;
