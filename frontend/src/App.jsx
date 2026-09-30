import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import WebcamView from './components/WebcamView';
import EmotionOverlay from './components/EmotionOverlay';
import EmotionTelemetry from './components/EmotionTelemetry';
import AdaptiveIntervention from './components/AdaptiveIntervention';
import NowPlaying from './components/NowPlaying';
import SoundwaveBulbIcon from './components/SoundwaveBulbIcon';
import { EMOTION_PROFILES } from './services/emotionService';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedEmotionKey, setSelectedEmotionKey] = useState('calm');

  const currentProfile = EMOTION_PROFILES[selectedEmotionKey] || EMOTION_PROFILES.calm;

  const emotionKeys = [
    { key: 'happy', emoji: '😄', label: 'Happy' },
    { key: 'sad', emoji: '🥺', label: 'Sad' },
    { key: 'stressed', emoji: '😤', label: 'Stressed / Angry' },
    { key: 'calm', emoji: '😌', label: 'Calm / Neutral' },
    { key: 'tired', emoji: '🥱', label: 'Tired / Fatigued' },
  ];

  return (
    <div className="auren-root-container">
      {/* Floating Vertical Nav Dock */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Workspace Area */}
      <div className="auren-main-wrapper">
        {/* Top Navigation Bar with Soundwave Bulb Brand Icon */}
        <header className="auren-topbar">
          <div className="topbar-left">
            <div className="brand-hero-group">
              <div className="brand-bulb-container">
                <SoundwaveBulbIcon size={52} />
              </div>
              <div>
                <h1 className="auren-brand-title">Auren</h1>
                <p className="auren-brand-sub">Neural Emotion Recognition & Adaptive Audio</p>
              </div>
            </div>

            <div className="topbar-pill-tabs">
              <span className="topbar-tab active">Live Session</span>
              <span className="topbar-tab">Audio Stream</span>
              <span className="topbar-tab">Environment</span>
            </div>
          </div>

          <div className="topbar-right">
            <div className="system-pill-badge">
              <span className="status-live-dot" />
              <span className="status-label">Vision Sensor Active</span>
              <span className="badge-sep">•</span>
              <span className="status-secondary">Adaptive Rule: Synced</span>
              <span className="badge-sep">•</span>
              <span className="status-secondary">Ambiance: {currentProfile.lighting.level}</span>
            </div>

            <button className="topbar-action-pill" title="Adaptive Mode">
              <span>Auto-Adapt ▾</span>
            </button>
          </div>
        </header>

        {/* Emotion Simulator / State Selector Bar */}
        <div className="emotion-selector-bar">
          <div className="selector-lead">
            <span className="selector-badge">TEST EMOTION STATES:</span>
            <span className="selector-hint">Click a state to test how Auren adapts lighting, soundwaves, and atmosphere:</span>
          </div>

          <div className="selector-pills-row">
            {emotionKeys.map((item) => {
              const isSelected = selectedEmotionKey === item.key;
              return (
                <button
                  key={item.key}
                  className={`emotion-select-pill ${isSelected ? 'active' : ''}`}
                  onClick={() => setSelectedEmotionKey(item.key)}
                >
                  <span className="pill-emoji">{item.emoji}</span>
                  <span className="pill-text">{item.label}</span>
                  {isSelected && <span className="pill-active-glow" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <main className="auren-bento-grid">
          {/* Left Column: Live Vision Feed & Mood Breakdown */}
          <section className="bento-column-left">
            {/* Live Camera Viewport Panel */}
            <div className="bento-card-camera">
              <div className="card-section-label">
                <span className="label-title">NEURAL VISION & FACE MESH</span>
                <span className="label-badge">
                  Active State: {currentProfile.name}
                </span>
              </div>

              <WebcamView>
                <EmotionOverlay
                  activeEmotion={currentProfile.name}
                  confidence={parseFloat(currentProfile.track.confidence) / 100}
                />
              </WebcamView>
            </div>

            {/* Simple, intuitive mood meters */}
            <EmotionTelemetry profile={currentProfile} />
          </section>

          {/* Right Column: Adaptive Intervention, Active Emotion State Card, & Now Playing */}
          <aside className="bento-column-right">
            {/* 1. Core Adaptive Intervention Engine Card */}
            <AdaptiveIntervention profile={currentProfile} />

            {/* 2. Active Emotion-State Card with subtle border and shadow */}
            <div className="active-emotion-card">
              <div className="active-card-glow-layer" />

              <div className="active-card-header">
                <span className="active-card-tag">CURRENT DETECTED MOOD</span>
                <span className="active-card-pill">{currentProfile.category}</span>
              </div>

              <div className="active-card-body">
                <div className="active-metric-value">
                  <span className="metric-emoji-glow">{currentProfile.emoji}</span> {currentProfile.name}
                </div>
                <div className="active-metric-label">
                  Adaptive Goal: {currentProfile.goal}
                </div>
              </div>

              <div className="active-card-footer">
                <div className="active-user-row">
                  <div className="active-avatar-tile">🌸</div>
                  <div>
                    <div className="active-user-name">Intervention Protocol</div>
                    <div className="active-user-sub">{currentProfile.actionSummary}</div>
                  </div>
                </div>
                <span className="active-state-tag">Active</span>
              </div>
            </div>

            {/* 3. Now Playing Music Card */}
            <NowPlaying track={currentProfile.track} />
          </aside>
        </main>
      </div>
    </div>
  );
}
