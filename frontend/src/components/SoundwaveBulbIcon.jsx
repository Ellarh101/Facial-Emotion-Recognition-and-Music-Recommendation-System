import React from 'react';
import './SoundwaveBulbIcon.css';

/**
 * SoundwaveBulbIcon Component
 * Features a modern light bulb with luminous, layered harmonic soundwave ribbons
 * streaming dynamically out of the bulb core (inspired by Image 2).
 */
export default function SoundwaveBulbIcon({ size = 52, className = '' }) {
  return (
    <div className={`soundwave-bulb-wrapper ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 140 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="soundwave-bulb-svg"
      >
        <defs>
          {/* Bulb core radiant glow */}
          <radialGradient id="bulbCoreGlow" cx="42" cy="46" r="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#C98E8D" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#63434E" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#141F2A" stopOpacity="0" />
          </radialGradient>

          {/* Glass body gradient */}
          <linearGradient id="bulbGlassGrad" x1="26" y1="26" x2="58" y2="66" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#C98E8D" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#141F2A" stopOpacity="0.5" />
          </linearGradient>

          {/* Soundwave primary cyan-to-magenta gradient (Image 2 style) */}
          <linearGradient id="soundwaveGrad1" x1="42" y1="46" x2="136" y2="46" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#38BDF8" />
            <stop offset="65%" stopColor="#D946EF" />
            <stop offset="100%" stopColor="#C98E8D" stopOpacity="0.85" />
          </linearGradient>

          {/* Secondary wave gradient */}
          <linearGradient id="soundwaveGrad2" x1="42" y1="46" x2="136" y2="46" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="45%" stopColor="#818CF8" />
            <stop offset="80%" stopColor="#C084FC" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.2" />
          </linearGradient>

          {/* Tertiary wave gradient */}
          <linearGradient id="soundwaveGrad3" x1="42" y1="46" x2="136" y2="46" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#F472B6" />
            <stop offset="75%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#D946EF" stopOpacity="0.15" />
          </linearGradient>

          {/* Wave central horizon laser beam */}
          <linearGradient id="laserBeamGrad" x1="38" y1="46" x2="138" y2="46" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#E879F9" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#38BDF8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="waveGlow" x="-20%" y="-30%" width="140%" height="160%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Core luminous aura */}
        <circle cx="42" cy="46" r="26" fill="url(#bulbCoreGlow)" />

        {/* Central horizontal laser beam line passing through the soundwave */}
        <line
          x1="42"
          y1="46"
          x2="136"
          y2="46"
          stroke="url(#laserBeamGrad)"
          strokeWidth="1.8"
          strokeLinecap="round"
          filter="url(#waveGlow)"
          className="soundwave-laser"
        />

        {/* STREAMING SOUNDWAVE RIBBONS COMING OUT OF THE BULB (Image 2 style harmonic sine ribbons) */}
        {/* Upper Harmonic Wave 1 */}
        <path
          d="M 42 46 C 54 22, 64 22, 74 46 C 84 70, 96 70, 108 46 C 118 24, 126 30, 136 46"
          stroke="url(#soundwaveGrad1)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
          filter="url(#waveGlow)"
          className="soundwave-line wave-1"
        />

        {/* Inverse Harmonic Wave 2 */}
        <path
          d="M 42 46 C 52 68, 62 68, 72 46 C 82 24, 94 24, 106 46 C 116 66, 124 62, 136 46"
          stroke="url(#soundwaveGrad2)"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          className="soundwave-line wave-2"
        />

        {/* High Frequency Micro Wave 3 */}
        <path
          d="M 42 46 C 48 34, 54 34, 60 46 C 66 58, 72 58, 78 46 C 84 34, 90 34, 96 46 C 102 58, 108 58, 114 46 C 120 36, 126 38, 134 46"
          stroke="url(#soundwaveGrad3)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="1 1.5"
          fill="none"
          className="soundwave-line wave-3"
        />

        {/* Secondary Harmonic Wave 4 */}
        <path
          d="M 44 46 C 56 30, 66 30, 76 46 C 86 62, 98 62, 110 46 C 120 32, 128 36, 135 44"
          stroke="#38BDF8"
          strokeWidth="0.9"
          strokeOpacity="0.75"
          fill="none"
          className="soundwave-line wave-4"
        />

        {/* Radiant wave spark points / nodes at frequency crests */}
        <circle cx="74" cy="22" r="1.8" fill="#FFFFFF" filter="url(#waveGlow)" />
        <circle cx="96" cy="70" r="1.8" fill="#38BDF8" filter="url(#waveGlow)" />
        <circle cx="108" cy="24" r="1.6" fill="#F472B6" />
        <circle cx="62" cy="68" r="1.4" fill="#38BDF8" />
        <circle cx="126" cy="30" r="1.2" fill="#FFFFFF" />

        {/* MODERN REALISTIC LIGHT BULB SILHOUETTE */}
        {/* Glass Bulb Contour */}
        <path
          d="M 42 24 C 30.5 24 21.5 33 21.5 44.5 C 21.5 51.8 25.2 58.2 30.8 62 C 32.3 63 33.2 64.6 33.3 66.4 L 33.5 70 H 50.5 L 50.7 66.4 C 50.8 64.6 51.7 63 53.2 62 C 58.8 58.2 62.5 51.8 62.5 44.5 C 62.5 33 53.5 24 42 24 Z"
          fill="url(#bulbGlassGrad)"
          stroke="#C98E8D"
          strokeWidth="1.6"
        />

        {/* Specular glass reflection arc */}
        <path
          d="M 28 38 C 30 30 35 27 40 26.5"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />

        {/* Filament coil mounts */}
        <path d="M 36 67 L 38 49 M 48 67 L 46 49" stroke="#7E8496" strokeWidth="0.9" />

        {/* Luminous Filament Ring (where wave originates) */}
        <circle cx="42" cy="46" r="3.5" stroke="#FFFFFF" strokeWidth="1.5" fill="#C98E8D" filter="url(#waveGlow)" />

        {/* Metallic Screw Collar */}
        <rect x="33.5" y="70" width="17" height="3" rx="1.5" fill="#7E8496" stroke="#233444" strokeWidth="0.8" />
        <rect x="34.5" y="73.5" width="15" height="3" rx="1.5" fill="#63434E" stroke="#233444" strokeWidth="0.8" />
        <rect x="35.5" y="77" width="13" height="3" rx="1.5" fill="#7E8496" stroke="#233444" strokeWidth="0.8" />

        {/* Base Contact Point */}
        <path d="M 37.5 80 C 37.5 82 39.5 83.5 42 83.5 C 44.5 83.5 46.5 82 46.5 80 Z" fill="#0C131A" stroke="#233444" strokeWidth="0.8" />
      </svg>
    </div>
  );
}
