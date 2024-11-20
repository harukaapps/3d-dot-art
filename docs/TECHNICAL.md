# Technical Documentation

This document provides technical details about the implementation and architecture of the 3D Dot Art Generator.

## 🏗️ Architecture Overview

The application is built using a modern web stack with the following key components:

```
3D Dot Art Generator/
├── app/                    # Next.js app directory
├── components/            # React components
├── utilities/            # Helper functions
└── public/               # Static assets
```

## 🔄 Data Flow

1. **Image Upload**
   - Image is selected by user
   - Automatic resizing if needed (max 800x800)
   - Conversion to data URL

2. **Image Processing**
   - Canvas used for pixel data extraction
   - Brightness values calculated for depth mapping
   - Color information preserved for point colors

3. **Point Generation**
   - D3.js Voronoi diagram for point distribution
   - Iterative Lloyd's relaxation for uniformity
   - Points mapped to 3D space based on brightness

4. **3D Rendering**
   - Three.js scene setup with perspective camera
   - Points rendered using THREE.Points
   - OrbitControls for user interaction

## 🛠️ Key Components

### MainComponent
- Manages application state
- Handles file uploads
- Controls 3D scene
- Manages user interactions

### Image Processing
- Automatic resizing for large images
- Canvas-based pixel data extraction
- Color and brightness calculations

### 3D Visualization
- Three.js scene management
- Camera and controls setup
- Point cloud rendering
- Real-time updates

## ⚡ Performance Optimizations

### Image Processing
- Automatic resizing of large images
- Efficient pixel data extraction
- Optimized color calculations

### Point Generation
- Efficient Voronoi diagram generation
- Optimized Lloyd's relaxation
- Cached point calculations

### 3D Rendering
- Efficient point cloud rendering
- Optimized Three.js scene
- Proper disposal of 3D resources

## 🔧 Technical Considerations

### Browser Support
- WebGL 1.0 required
- Modern browser features used:
  - Canvas API
  - File API
  - Web Workers (future)

### Memory Management
- Proper cleanup of 3D resources
- Efficient handling of large datasets
- Browser memory limitations considered

### Future Improvements
- WebGL 2.0 features
- Web Worker implementation
- Progressive loading
- WebAssembly optimization

## 🔍 Code Examples

### Point Generation
```typescript
const generatePoints = (width: number, height: number, count: number) => {
  // Initial random points
  const points = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
  }));

  // Create Voronoi diagram
  const delaunay = d3.Delaunay.from(
    points,
    d => d.x,
    d => d.y
  );
  const voronoi = delaunay.voronoi([0, 0, width, height]);

  return { points, voronoi };
};
```

### Depth Mapping
```typescript
const calculateDepth = (
  imageData: ImageData,
  x: number,
  y: number,
  width: number
) => {
  const index = (y * width + x) * 4;
  const r = imageData.data[index];
  const g = imageData.data[index + 1];
  const b = imageData.data[index + 2];
  return (r + g + b) / (3 * 255); // Normalized brightness
};
```

## 📊 Performance Metrics

Typical performance metrics on modern hardware:

- Image Processing: < 500ms
- Point Generation: < 1s for 5000 points
- Rendering: 60 FPS
- Memory Usage: < 100MB

## 🔐 Security Considerations

- All processing done client-side
- No data sent to servers
- Safe file handling
- Memory cleanup

## 📚 Dependencies

Major dependencies and their purposes:

- **Next.js**: React framework
- **Three.js**: 3D rendering
- **D3.js**: Point distribution
- **TypeScript**: Type safety
- **Tailwind**: Styling
