# 3D Dot Art Generator

An interactive web application that transforms 2D images into stunning 3D dot art visualizations using Next.js, Three.js, and D3.js.

![Demo](docs/images/demo.gif)

## ✨ Features

- 🎨 Convert any image into 3D dot art
- 🔄 Interactive 3D controls (rotate, zoom, pan)
- 📏 Adjustable parameters:
  - Number of dots
  - Depth effect
  - Iteration count
- 📱 Responsive design
- 🚀 Optimized image processing
- 🎮 Keyboard shortcuts for quick adjustments

## 🎮 Controls

- **Mouse Controls:**
  - Left click + drag: Rotate view
  - Right click + drag: Pan view
  - Scroll: Zoom in/out

- **Keyboard Shortcuts:**
  - `↑`/`↓`: Adjust depth effect
  - `[`/`]`: Change iteration count
  - `H`: Toggle instructions

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 8.0.0 or higher

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Technology Stack

- Next.js 13+
- React 18
- Three.js
- D3.js
- TypeScript
- Tailwind CSS

## ⚡ Performance Optimizations

- Automatic image resizing for large files
- Efficient dot generation using D3.js Voronoi
- Optimized Three.js rendering
- Responsive design for all devices

## 📝 How It Works

1. **Image Processing:**
   - Uploads are automatically resized for optimal performance
   - Images are converted to a data structure suitable for 3D rendering

2. **Dot Generation:**
   - Uses D3.js Voronoi algorithm for even point distribution
   - Iterative relaxation for improved point placement
   - Color sampling from original image

3. **3D Visualization:**
   - Points are positioned in 3D space based on image brightness
   - Interactive camera controls using Three.js OrbitControls
   - Real-time adjustments for depth and detail

## 📚 Documentation

- [Usage Guide](docs/USAGE.md)
- [Technical Details](docs/TECHNICAL.md)
- [Contributing Guidelines](docs/CONTRIBUTING.md)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 👤 Author

Created by haruka_apps

---

Made with ❤️ using Next.js, Three.js, and D3.js
