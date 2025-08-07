const API_URL = 'http://localhost:5758';

export interface ImageAnalysisResult {
  analysis: string;
  imagePath: string;
}

export interface ImageGenerationResult {
  imageUrl: string;
  savedPath: string;
  prompt: string;
}

export interface ChatResult {
  response: string;
}

class OpenAIService {
  async analyzeImage(imageFile: File): Promise<ImageAnalysisResult> {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await fetch(`${API_URL}/api/openai/analyze-image`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to analyze image');
    }

    return response.json();
  }

  async generateImage(prompt: string, size: string = "1024x1024"): Promise<ImageGenerationResult> {
    const response = await fetch(`${API_URL}/api/openai/generate-image`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, size }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate image');
    }

    return response.json();
  }

  async chat(message: string, context?: string): Promise<ChatResult> {
    const response = await fetch(`${API_URL}/api/openai/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, context }),
    });

    if (!response.ok) {
      throw new Error('Failed to process chat request');
    }

    return response.json();
  }

  async getCryptoAnalysis(cryptoData: any): Promise<ChatResult> {
    const context = "You are an expert crypto analyst. Provide insights about cryptocurrency trends, market analysis, and trading opportunities.";
    const message = `Analyze this crypto data: ${JSON.stringify(cryptoData)}`;
    
    return this.chat(message, context);
  }

  async generateCryptoImages(prompt: string): Promise<ImageGenerationResult> {
    const enhancedPrompt = `Cryptocurrency themed: ${prompt}. Modern, professional, digital art style with blockchain and crypto elements.`;
    return this.generateImage(enhancedPrompt);
  }
}

const openaiService = new OpenAIService();
export default openaiService;
