import React from 'react';
import './EmotionTelemetry.css';

/**
 * EmotionTelemetry Component (Layman-Friendly Edition)
 * Displays current mood meters and breakdown for the active emotion profile.
 */
export default function EmotionTelemetry({ profile }) {
  if (!profile) return null;

  const { name, emoji, meters, confidence, intervention } = profile;

  return (
    <div className="mood-breakdown-card">
      <div className="mood-header">
        <div>
          <span className="mood-eyebrow">REAL-TIME EXPRESSIONS</span>
          <h3 className="mood-title">Your Current Mood & Vibe</h3>
        </div>
        <div className="live-pill-tag">
          <span className="pulse-azure-dot" />
          <span>Live Analyzing</span>
        </div>
      </div>

      {/* Primary Highlight Pill */}
      <div className="mood-primary-banner">
        <div className="banner-emoji">{emoji}</div>
        <div className="banner-info">
          <div className="banner-label">Dominant Emotion Detected</div>
          <div className="banner-value">
            {name} ({profile.track.confidence} Certainty)
          </div>
        </div>
        <div className="banner-action-tag">{profile.goal}</div>
      </div>

      {/* Simple, intuitive emotion meters */}
      <div className="mood-meters-list">
        {meters.map((m, idx) => (
          <div key={idx} className="meter-item">
            <div className="meter-row-top">
              <div className="meter-label-group">
                <span className="meter-emoji">{m.emoji}</span>
                <span className="meter-name">{m.label}</span>
              </div>
              <div className="meter-value-group">
                <span className="meter-status-tag">{m.status}</span>
                <span className="meter-percentage">{m.percent}%</span>
              </div>
            </div>

            <div className="meter-bar-track">
              <div
                className="meter-bar-fill"
                style={{
                  width: `${m.percent}%`,
                  background: `linear-gradient(90deg, var(--palette-2) 0%, ${m.accentColor} 100%)`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Layman-friendly explanation note */}
      <div className="mood-guide-box">
        <span className="guide-icon">💡</span>
        <p className="guide-text">
          <strong>Auren's Action:</strong> {intervention.text}
        </p>
      </div>
    </div>
  );
}
