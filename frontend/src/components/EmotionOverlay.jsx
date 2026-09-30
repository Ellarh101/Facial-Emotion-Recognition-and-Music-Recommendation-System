import React, { useRef, useEffect } from 'react';
import './EmotionOverlay.css';

/**
 * EmotionOverlay Component (Auren Edition)
 * Renders on top of the WebcamView canvas.
 * High-tech HUD layer ready to project MediaPipe face mesh points,
 * bounding boxes, and emotion classification confidence tags.
 */
export default function EmotionOverlay({
  faceData = null,
  activeEmotion = 'Calm',
  confidence = 0.88,
}) {
  const overlayCanvasRef = useRef(null);

  // Future face-mesh drawing loop can be connected here
  useEffect(() => {
    const canvas = overlayCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (faceData) {
      // Placeholder hook for drawing facial mesh landmarks & bounding box
    }
  }, [faceData]);

  return (
    <div className="auren-overlay-container">
      {/* Overlay Canvas for rendering MediaPipe face landmarks & bounding boxes */}
      <canvas
        ref={overlayCanvasRef}
        className="auren-overlay-canvas"
        width={640}
        height={480}
      />

      {/* Target framing reticle indicators */}
      <div className="auren-hud-reticle">
        <div className="hud-corner top-left" />
        <div className="hud-corner top-right" />
        <div className="hud-corner bottom-left" />
        <div className="hud-corner bottom-right" />

        {/* Center subtle alignment crosshair */}
        <div className="hud-center-crosshair">
          <div className="crosshair-h" />
          <div className="crosshair-v" />
        </div>

        {/* Floating facial scan sweep effect */}
        <div className="hud-scan-sweep" />
      </div>

      {/* Emotion telemetry tag badge */}
      <div className="auren-hud-emotion-pill">
        <span className="emotion-dot" />
        <span className="emotion-name">{activeEmotion.toUpperCase()}</span>
        <span className="emotion-divider">|</span>
        <span className="emotion-percent">{Math.round(confidence * 100)}%</span>
      </div>
    </div>
  );
}
