import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Hook to manage webcam stream access, status, and lifecycle.
 *
 * @param {Object} options Configuration options
 * @param {boolean} options.autoStart Whether to request camera automatically on mount
 * @param {MediaTrackConstraints} options.constraints Video track constraints
 */
export function useWebcam({ autoStart = true, constraints = { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' } } = {}) {
  const [stream, setStream] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);

  const videoRef = useRef(null);

  const stopStream = useCallback(() => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsStreaming(false);
  }, [stream]);

  const startStream = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera access is not supported by your browser or connection is insecure (requires HTTPS or localhost).');
      }

      // Stop any existing stream before starting a new one
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }

      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: constraints,
        audio: false,
      });

      setStream(mediaStream);

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        await videoRef.current.play().catch((playErr) => {
          console.warn('Video autoplay failed or was interrupted:', playErr);
        });
      }

      setIsStreaming(true);
    } catch (err) {
      console.error('Failed to access webcam:', err);
      let message = 'Failed to access webcam.';
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        message = 'Camera permission was denied. Please allow camera access in browser settings.';
      } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
        message = 'No camera device found on this system.';
      } else if (err.name === 'NotReadableError' || err.name === 'TrackStartError') {
        message = 'Webcam is currently in use by another application.';
      } else if (err.message) {
        message = err.message;
      }
      setError(message);
      setIsStreaming(false);
    } finally {
      setIsLoading(false);
    }
  }, [constraints, stream]);

  useEffect(() => {
    if (autoStart) {
      startStream();
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [autoStart]);

  return {
    videoRef,
    stream,
    isLoading,
    isStreaming,
    error,
    startStream,
    stopStream,
  };
}
