import React, { useRef, useEffect, useState } from 'react';
import './WebcamView.css';

/**
 * WebcamView Component (Auren Edition)
 * Requests webcam permissions and renders the live video stream onto an HTML5 <canvas>.
 * Styled with futuristic 24px rounded corners, ambient underglow, and sleek HUD indicators.
 */
export default function WebcamView({ onCanvasReady, children }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const animationFrameIdRef = useRef(null);

  const [stream, setStream] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [videoDimensions, setVideoDimensions] = useState({ width: 640, height: 480 });
  const [fps, setFps] = useState(60);

  // Start webcam feed
  const startCamera = async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error('Webcam access is not supported by your browser or environment.');
      }

      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640 },
          height: { ideal: 480 },
          facingMode: 'user',
        },
        audio: false,
      });

      setStream(mediaStream);

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.onloadedmetadata = () => {
          const w = videoRef.current.videoWidth || 640;
          const h = videoRef.current.videoHeight || 480;
          setVideoDimensions({ width: w, height: h });
          videoRef.current.play().catch(console.error);
          setIsLoading(false);
        };
      }
    } catch (err) {
      console.error('Camera initialization failed:', err);
      let message = 'Unable to access camera.';
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        message = 'Camera permission denied. Please allow camera access in your browser settings.';
      } else if (err.name === 'NotFoundError') {
        message = 'No camera device detected.';
      } else if (err.name === 'NotReadableError') {
        message = 'Camera is in use by another program.';
      }
      setError(message);
      setIsLoading(false);
    }
  };

  // Canvas drawing loop with FPS calculation
  useEffect(() => {
    let active = true;
    let frameCount = 0;
    let lastTime = performance.now();

    const renderFrame = (now) => {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      if (video && canvas && video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          // Flip horizontally for natural mirror effect
          ctx.save();
          ctx.translate(canvas.width, 0);
          ctx.scale(-1, 1);
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          ctx.restore();

          if (onCanvasReady) {
            onCanvasReady({ canvas, ctx, video });
          }
        }
      }

      // Calculate approximate FPS
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }

      if (active) {
        animationFrameIdRef.current = requestAnimationFrame(renderFrame);
      }
    };

    if (stream && !isLoading && !error) {
      animationFrameIdRef.current = requestAnimationFrame(renderFrame);
    }

    return () => {
      active = false;
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [stream, isLoading, error, onCanvasReady]);

  // Initial camera start & cleanup
  useEffect(() => {
    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return (
    <div className="auren-webcam-wrapper">
      {/* Ambient neon underglow */}
      <div className="webcam-ambient-glow" />

      <div className="webcam-viewport-card">
        {/* Hidden native video element acting as frame source */}
        <video
          ref={videoRef}
          className="webcam-video-hidden"
          playsInline
          muted
          autoPlay
        />

        {/* Primary Canvas rendering the live feed */}
        <canvas
          ref={canvasRef}
          className="webcam-canvas"
          width={videoDimensions.width}
          height={videoDimensions.height}
        />

        {/* Injected Overlay (EmotionOverlay) */}
        {children}

        {/* Loading state indicator */}
        {isLoading && (
          <div className="webcam-feedback-overlay">
            <div className="auren-pulse-spinner" />
            <p className="feedback-title">Initializing Neural Vision Feed</p>
            <p className="feedback-sub">Requesting browser camera permissions...</p>
          </div>
        )}

        {/* Error state notification */}
        {error && (
          <div className="webcam-feedback-overlay error">
            <div className="error-badge">⚠️</div>
            <p className="error-title">Camera Feed Offline</p>
            <p className="error-sub">{error}</p>
            <button className="auren-btn-primary" onClick={startCamera}>
              Grant Camera Access
            </button>
          </div>
        )}

        {/* Top Status HUD Pills */}
        {!isLoading && !error && (
          <div className="webcam-hud-top">
            <div className="hud-pill-live">
              <span className="hud-pulse-dot" />
              <span>LIVE FEED</span>
            </div>
            <div className="hud-pill-metric">
              <span>{fps} FPS</span>
              <span className="pill-divider">•</span>
              <span>{videoDimensions.width}x{videoDimensions.height}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
