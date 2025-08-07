# BlockCoinX Clone with AI Integration

A modern cryptocurrency trading platform clone built with React, featuring AI-powered tools using OpenAI's GPT-4 Vision and DALL-E 3.

## 🚀 Features

- **Responsive Design**: Fully responsive interface for desktop and mobile
- **AI-Powered Tools**: 
  - Image generation with DALL-E 3
  - Image analysis with GPT-4 Vision
  - Smart crypto insights and analysis
- **Real-time Data**: WebSocket connections for live crypto data
- **Modular Architecture**: Clean, maintainable component structure
- **Auto-save**: Generated images and analysis automatically saved
- **GitHub Integration**: Easy repository access and collaboration

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Backend**: Express.js server
- **AI Integration**: OpenAI API (GPT-4 Vision, DALL-E 3)
- **Routing**: React Router DOM v6
- **Styling**: CSS Modules with modern design
- **File Upload**: Multer for image handling

## 📁 Project Structure

```
blockcoinx-clone
├── src
│   ├── components          # React components
│   │   ├── common          # Reusable components (Header, Footer, Button, GitHubLink)
│   │   ├── sections        # Page sections (Hero, Stats, CryptoMarket, etc.)
│   │   ├── openai          # AI-powered components
│   │   │   ├── OpenAIAnalysis    # GPT-4 Vision image analysis
│   │   │   └── ImageGenerator    # DALL-E 3 image generation
│   │   └── layout          # Layout components (MainLayout, ScrollToTop)
│   ├── pages              # Page components
│   │   ├── Home           # Main landing page
│   │   └── AITools        # AI tools showcase page
│   ├── services           # API services
│   │   ├── api            # Crypto data APIs
│   │   └── openai         # OpenAI service integration
│   ├── hooks              # Custom React hooks
│   ├── types              # TypeScript type definitions
│   ├── styles             # Global styles and themes
│   ├── utils              # Utility functions
│   ├── uploads            # User uploaded files
│   └── saved              # AI generated content storage
├── server                 # Express.js backend
├── public                 # Static assets
└── package.json          # Dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd blockcoinx-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=5758
   REACT_APP_API_URL=http://localhost:5758
   ```

4. **Start the development servers**
   
   **Option 1: Run both servers simultaneously**
   ```bash
   npm run dev
   ```
   
   **Option 2: Run servers separately**
   ```bash
   # Terminal 1 - Backend server (port 5758)
   npm run server
   
   # Terminal 2 - Frontend server (port 5784)
   npm start
   ```

5. **Open your browser**
   - Frontend: http://localhost:5784
   - Backend API: http://localhost:5758

## 🤖 AI Features

### Image Generation
- Access via `/ai-tools` page
- Generate crypto-themed images using DALL-E 3
- Multiple size options available
- Auto-save to `/saved` directory

### Image Analysis
- Upload images for GPT-4 Vision analysis
- Detailed insights and descriptions
- Perfect for analyzing charts, logos, or crypto-related content

### Smart Insights
- AI-powered crypto market analysis
- Trend identification and explanations
- Market sentiment analysis

## 📱 Pages & Routes

- `/` - Home page with all crypto exchange sections
- `/ai-tools` - AI-powered tools page
- Smooth scroll-to-top navigation

## 🎨 Design System

- **Primary Color**: #00D395 (BlockCoinX Green)
- **Background**: #0B1426 (Dark Navy)
- **Cards**: #0A1220 with subtle borders
- **Text**: White and gray variations
- **Gradients**: Green-based for CTAs and accents

## 📂 Key Directories

- `/src/uploads` - User uploaded images
- `/src/saved` - AI generated images and content
- `/src/components/openai` - AI-related components
- `/server` - Express.js backend with OpenAI integration

## 🔧 Scripts

- `npm start` - Start React development server (port 5784)
- `npm run server` - Start Express backend server (port 5758)
- `npm run dev` - Start both servers concurrently
- `npm run build` - Build for production
- `npm test` - Run tests

## 🌟 Features Implementation

### Scroll to Top
- Automatic scroll to top on route changes
- Smooth scrolling behavior
- Implemented via `ScrollToTop` component

### GitHub Integration
- GitHub link in header and footer
- Easy repository access
- Professional development workflow

### File Management
- Automatic directory creation for uploads/saved content
- Organized file structure
- Proper gitignore for sensitive files

## 🚀 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Set up production environment variables**

3. **Deploy backend and frontend separately or together**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes. Please respect OpenAI's usage policies and BlockCoinX's trademarks.

## 🔗 Links

- [OpenAI API Documentation](https://platform.openai.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
│   ├── hooks              # Custom hooks for data fetching
│   ├── services           # API and WebSocket services
│   ├── types              # TypeScript types
│   ├── styles             # Global and component-specific styles
│   ├── App.tsx            # Main application component
│   └── index.tsx          # Entry point of the application
├── public
│   └── index.html         # Main HTML file
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── .gitignore             # Git ignore file
└── README.md              # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd blockcoinx-clone
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm start
```

The application will be available at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.