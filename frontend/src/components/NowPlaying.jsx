import React, { useState } from 'react';
import './NowPlaying.css';

/**
 * NowPlaying Component (Auren Ocean Palette Edition)
 * Displays the currently recommended music track with clear, intuitive details.
 */
export default function NowPlaying({
  track = {
    title: 'Weightless (Deep Ambient)',
    artist: 'Marconi Union',
    album: 'Ambient Transmissions',
    coverUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80',
    matchedEmotion: 'Calm & Relaxed',
    confidence: '92%',
    bpm: '60 BPM',
    vibe: 'Peaceful Flow',
  },
  onPlayPause,
}) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [progress, setProgress] = useState(42);

  const togglePlay = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    if (onPlayPause) onPlayPause(nextState);
  };

  return (
    <div className="auren-player-card">
      <div className="player-header">
        <div className="player-tag-pill">
          <span className="player-tag-dot" />
          <span>MATCHED FOR YOUR MOOD</span>
        </div>
        <span className="player-resonance-tag">{track.confidence} Match</span>
      </div>

      <div className="player-hero">
        <div className={`player-art-frame ${isPlaying ? 'is-playing' : ''}`}>
          <img
            src={track.coverUrl}
            alt={`${track.title} cover`}
            className="player-art-img"
          />
          {isPlaying && (
            <div className="player-eq-overlay">
              <span className="eq-bar bar-1" />
              <span className="eq-bar bar-2" />
              <span className="eq-bar bar-3" />
              <span className="eq-bar bar-4" />
              <span className="eq-bar bar-5" />
            </div>
          )}
        </div>

        <div className="player-details">
          <span className="player-genre-badge">{track.matchedEmotion}</span>
          <h3 className="player-track-name">{track.title}</h3>
          <p className="player-artist-name">{track.artist}</p>
          <div className="player-meta-row">
            <span>{track.vibe}</span>
            <span className="meta-dot">•</span>
            <span>{track.bpm}</span>
          </div>
        </div>
      </div>

      {/* Modern scrub progress bar */}
      <div className="player-scrub-section">
        <div
          className="player-scrub-track"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
            setProgress(pct);
          }}
        >
          <div className="player-scrub-fill" style={{ width: `${progress}%` }}>
            <span className="player-scrub-handle" />
          </div>
        </div>
        <div className="player-time-row">
          <span>1:45</span>
          <span>4:20</span>
        </div>
      </div>

      {/* Playback action controls */}
      <div className="player-controls-row">
        <button
          className={`player-icon-btn ${isLiked ? 'active-like' : ''}`}
          onClick={() => setIsLiked(!isLiked)}
          title="Save to Favorites"
        >
          {isLiked ? '❤️' : '🤍'}
        </button>

        <button className="player-icon-btn" title="Previous Track">
          ⏮
        </button>

        <button
          className="player-play-btn"
          onClick={togglePlay}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '❚❚' : '▶'}
        </button>

        <button className="player-icon-btn" title="Next Track">
          ⏭
        </button>

        <button className="player-icon-btn" title="Shuffle Station">
          🔀
        </button>
      </div>

      {/* Pill action buttons */}
      <div className="player-actions-row">
        <button className="pill-btn-white" title="Pick another track">
          Change Song
        </button>
        <button className="pill-btn-blue" title="Song details">
          Track Info
        </button>
      </div>
    </div>
  );
}
