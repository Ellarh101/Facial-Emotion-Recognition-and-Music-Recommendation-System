import React, { useState } from 'react';
import SoundwaveBulbIcon from './SoundwaveBulbIcon';
import './Sidebar.css';

/**
 * Sidebar Component (Professional Dusk Blossom Edition)
 * Floating vertical dock featuring the Soundwave Bulb Brand Icon.
 */
export default function Sidebar({ activeTab = 'dashboard', onTabChange }) {
  const [currentTab, setCurrentTab] = useState(activeTab);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '✦' },
    { id: 'camera', label: 'Neural Camera', icon: '📹' },
    { id: 'analytics', label: 'Mood Breakdown', icon: '📊' },
    { id: 'music', label: 'Audio Stream', icon: '🎵' },
    { id: 'settings', label: 'Preferences', icon: '⚙️' },
  ];

  const handleSelect = (id) => {
    setCurrentTab(id);
    if (onTabChange) onTabChange(id);
  };

  return (
    <aside className="auren-sidebar">
      <div className="sidebar-top">
        <div className="sidebar-logo" title="Auren — Emotion & Soundwave AI">
          <SoundwaveBulbIcon size={46} />
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              className={`nav-pill-btn ${isActive ? 'active' : ''}`}
              onClick={() => handleSelect(item.id)}
              title={item.label}
              aria-label={item.label}
            >
              <span className="nav-icon">{item.icon}</span>
              {isActive && <span className="nav-glow-indicator" />}
            </button>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <div className="user-avatar-pill" title="User Profile">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
            alt="User"
            className="avatar-img"
          />
          <span className="user-status-dot" />
        </div>
      </div>
    </aside>
  );
}
