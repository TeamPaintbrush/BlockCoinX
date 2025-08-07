import React, { useState } from 'react';
import openaiService, { ImageGenerationResult } from '../../../services/openai/openaiService';
import styles from './ImageGenerator.module.css';

interface ImageGeneratorProps {
  onImageGenerated?: (result: ImageGenerationResult) => void;
}

const ImageGenerator: React.FC<ImageGeneratorProps> = ({ onImageGenerated }) => {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState('1024x1024');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<ImageGenerationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      const result = await openaiService.generateCryptoImages(prompt);
      setGeneratedImage(result);
      onImageGenerated?.(result);
    } catch (err) {
      setError('Failed to generate image. Please try again.');
      console.error('Generation error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const presetPrompts = [
    'Bitcoin golden coin with blockchain network background',
    'Ethereum cryptocurrency with digital circuits',
    'Futuristic crypto trading dashboard',
    'Digital wallet with various cryptocurrencies',
    'Blockchain network visualization',
    'Crypto mining farm with modern equipment'
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>AI Image Generator</h2>
        <p>Generate crypto-themed images with DALL-E 3</p>
      </div>

      <div className={styles.inputSection}>
        <div className={styles.promptSection}>
          <label className={styles.label}>Image Prompt</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the crypto-themed image you want to generate..."
            className={styles.promptInput}
            rows={3}
          />
        </div>

        <div className={styles.sizeSection}>
          <label className={styles.label}>Image Size</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className={styles.sizeSelect}
          >
            <option value="1024x1024">Square (1024x1024)</option>
            <option value="1792x1024">Landscape (1792x1024)</option>
            <option value="1024x1792">Portrait (1024x1792)</option>
          </select>
        </div>

        <button
          onClick={handleGenerate}
          disabled={!prompt.trim() || isGenerating}
          className={styles.generateButton}
        >
          {isGenerating ? 'Generating...' : 'Generate Image'}
        </button>
      </div>

      <div className={styles.presets}>
        <h3>Quick Prompts</h3>
        <div className={styles.presetGrid}>
          {presetPrompts.map((presetPrompt, index) => (
            <button
              key={index}
              onClick={() => setPrompt(presetPrompt)}
              className={styles.presetButton}
            >
              {presetPrompt}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className={styles.error}>
          {error}
        </div>
      )}

      {generatedImage && (
        <div className={styles.result}>
          <h3>Generated Image</h3>
          <div className={styles.imageContainer}>
            <img
              src={generatedImage.imageUrl}
              alt={generatedImage.prompt}
              className={styles.generatedImg}
            />
          </div>
          <div className={styles.imageInfo}>
            <p><strong>Prompt:</strong> {generatedImage.prompt}</p>
            <p><strong>Saved to:</strong> {generatedImage.savedPath}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
