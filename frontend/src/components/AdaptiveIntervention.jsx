import React from 'react';
import './AdaptiveIntervention.css';

/**
 * AdaptiveIntervention Component
 * Visualizes the 5 environmental and audio interventions defined by the user:
 * - Happy: Reinforce mood (upbeat music, brighter lighting)
 * - Sad: Comforting response (warmer lighting, calming/uplifting music, softer tone)
 * - Stressed/Angry: De-escalate (dim lighting, calming music, suggest a break)
 * - Calm/Neutral: Baseline state (ambient settings, no major intervention)
 * - Tired/Fatigued: Adjust for rest (dim/warm lighting, wind-down playlist, lower thermostat)
 */
export default function AdaptiveIntervention({ profile }) {
  if (!profile) return null;

  const { lighting, environment, intervention, rule } = profile;

  return (
    <div className="intervention-card">
      <div className="intervention-header">
        <div>
          <span className="intervention-eyebrow">AUREN ADAPTIVE RESPONSE</span>
          <h3 className="intervention-title">{intervention.heading}</h3>
        </div>
        <span className="intervention-badge-pill">{intervention.badge}</span>
      </div>

      {/* Direct rule statement */}
      <div className="intervention-rule-quote">
        <span className="rule-icon">⚙️</span>
        <span className="rule-text">{profile.rule || profile.actionSummary}</span>
      </div>

      {/* 3 Physical & Digital Adaptations Grid */}
      <div className="adaptations-grid">
        {/* 1. Lighting Control */}
        <div className="adaptation-tile">
          <div className="tile-top">
            <span className="tile-icon">💡</span>
            <span className="tile-label">LIGHTING</span>
          </div>
          <div className="tile-value">{lighting.mode}</div>
          <div className="tile-sub">
            <span className="tile-pill">Level: {lighting.level}</span>
            <span className="tile-pill">{lighting.tone}</span>
          </div>
        </div>

        {/* 2. Audio Strategy */}
        <div className="adaptation-tile">
          <div className="tile-top">
            <span className="tile-icon">🎵</span>
            <span className="tile-label">AUDIO STRATEGY</span>
          </div>
          <div className="tile-value">{profile.track.vibe}</div>
          <div className="tile-sub">
            <span className="tile-pill">{profile.track.bpm}</span>
            <span className="tile-pill">{profile.goal}</span>
          </div>
        </div>

        {/* 3. Environment & Wellness */}
        <div className="adaptation-tile">
          <div className="tile-top">
            <span className="tile-icon">🌡️</span>
            <span className="tile-label">ENVIRONMENT</span>
          </div>
          <div className="tile-value">{environment.thermostat}</div>
          <div className="tile-sub">
            <span className="tile-pill">{environment.sensory}</span>
          </div>
        </div>
      </div>

      {/* Contextual Break or Wellness Advice */}
      {environment.breakSuggestion ? (
        <div className="break-suggestion-banner">
          <span className="break-icon">☕</span>
          <div className="break-details">
            <span className="break-title">Active Recommendation:</span>
            <span className="break-body">{environment.breakSuggestion}</span>
          </div>
        </div>
      ) : null}

      <div className="intervention-tip-box">
        <p>{intervention.tip}</p>
      </div>
    </div>
  );
}
