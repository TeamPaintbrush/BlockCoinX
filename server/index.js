const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = 5758;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Ensure directories exist
const uploadsDir = path.join(__dirname, '../src/uploads');
const savedDir = path.join(__dirname, '../src/saved');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

if (!fs.existsSync(savedDir)) {
  fs.mkdirSync(savedDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// OpenAI routes
app.post('/api/openai/analyze-image', upload.single('image'), async (req, res) => {
  try {
    const { OpenAI } = require('openai');
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    const imagePath = req.file.path;
    const imageBase64 = fs.readFileSync(imagePath, { encoding: 'base64' });

    const response = await openai.chat.completions.create({
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: "Analyze this image and provide detailed insights about what you see." },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${imageBase64}`,
              },
            },
          ],
        },
      ],
    });

    res.json({
      analysis: response.choices[0].message.content,
      imagePath: `/uploads/${req.file.filename}`
    });
  } catch (error) {
    console.error('Error analyzing image:', error);
    res.status(500).json({ error: 'Failed to analyze image' });
  }
});

app.post('/api/openai/generate-image', async (req, res) => {
  try {
    const { OpenAI } = require('openai');
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { prompt, size = "1024x1024" } = req.body;

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: size,
    });

    const imageUrl = response.data[0].url;
    
    // Download and save the image
    const axios = require('axios');
    const imageResponse = await axios.get(imageUrl, { responseType: 'stream' });
    
    const filename = `generated-${Date.now()}.png`;
    const savePath = path.join(savedDir, filename);
    
    const writer = fs.createWriteStream(savePath);
    imageResponse.data.pipe(writer);

    writer.on('finish', () => {
      res.json({
        imageUrl: imageUrl,
        savedPath: `/saved/${filename}`,
        prompt: prompt
      });
    });

    writer.on('error', (error) => {
      console.error('Error saving image:', error);
      res.status(500).json({ error: 'Failed to save image' });
    });

  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).json({ error: 'Failed to generate image' });
  }
});

app.post('/api/openai/chat', async (req, res) => {
  try {
    const { OpenAI } = require('openai');
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { message, context } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: context || "You are a helpful assistant for a crypto trading platform."
        },
        {
          role: "user",
          content: message
        }
      ],
    });

    res.json({
      response: response.choices[0].message.content
    });
  } catch (error) {
    console.error('Error with chat:', error);
    res.status(500).json({ error: 'Failed to process chat request' });
  }
});

// Serve uploaded and saved files
app.use('/uploads', express.static(uploadsDir));
app.use('/saved', express.static(savedDir));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
