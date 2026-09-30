import React from 'react';
import './RadiantBulbIcon.css';

/**
 * RadiantBulbIcon Component
 * A realistic light bulb emitting concentric radiating wave rings, perfectly centered.
 */
export default function RadiantBulbIcon({ size = 56, className = '' }) {
  return (
    <div className={`radiant-bulb-wrapper ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="radiant-bulb-svg"
      >
        <defs>
          {/* Radial glow for filament center */}
          <radialGradient id="bulbCoreGlow" cx="60" cy="50" r="35" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#8AB4F8" stopOpacity="0.6" />
            <stop offset="65%" stopColor="#5B7CAB" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#344D75" stopOpacity="0" />
          </radialGradient>

          {/* Glass body gradient */}
          <linearGradient id="glassBulbGrad" x1="42" y1="28" x2="78" y2="72" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="45%" stopColor="#8AB4F8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#1A2D4C" stopOpacity="0.4" />
          </linearGradient>

          {/* Screw base metallic gradient */}
          <linearGradient id="baseMetalGrad" x1="52" y1="72" x2="68" y2="72" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="40%" stopColor="#CBD5E1" />
            <stop offset="70%" stopColor="#64748B" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          {/* Filament glow */}
          <filter id="filamentGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Concentric radiating wave rings centered at (60, 50) */}
        <circle cx="60" cy="50" r="54" className="radiating-ring ring-outer" stroke="#5B7CAB" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="60" cy="50" r="44" className="radiating-ring ring-mid-outer" stroke="#5B7CAB" strokeWidth="1.2" />
        <circle cx="60" cy="50" r="34" className="radiating-ring ring-mid" stroke="#5B7CAB" strokeWidth="1.4" />
        <circle cx="60" cy="50" r="25" className="radiating-ring ring-inner" stroke="#8AB4F8" strokeWidth="1.6" />

        {/* Core background aura glow */}
        <circle cx="60" cy="50" r="30" fill="url(#bulbCoreGlow)" />

        {/* Realistic Light Bulb Silhouette */}
        {/* Glass Bulb Dome */}
        <path
          d="M60 26C47.2975 26 37 36.2975 37 49C37 57.0734 41.1718 64.1672 47.4725 68.2816C49.1238 69.3599 50.1479 71.1895 50.218 73.1672L50.5 77H69.5L69.782 73.1672C69.8521 71.1895 70.8762 69.3599 72.5275 68.2816C78.8282 64.1672 83 57.0734 83 49C83 36.2975 72.7025 26 60 26Z"
          fill="url(#glassBulbGrad)"
          stroke="#5B7CAB"
          strokeWidth="1.6"
        />

        {/* Glass highlight specular arc */}
        <path
          d="M44 42C46 34 52 30 58 29"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeOpacity="0.75"
        />

        {/* Filament mounts */}
        <path d="M53 74L56 54M67 74L64 54" stroke="#64748B" strokeWidth="1" />

        {/* Filament Glowing Loop (Tungsten Coil) */}
        <path
          d="M56 54C56 47 58 45 60 45C62 45 64 47 64 54"
          stroke="#FFFBEB"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#filamentGlow)"
        />
        <circle cx="60" cy="46" r="2" fill="#FFFFFF" filter="url(#filamentGlow)" />

        {/* Screw Base Collar (Metallic thread grooves) */}
        <rect x="50" y="77" width="20" height="3" rx="1.5" fill="url(#baseMetalGrad)" stroke="#1A2D4C" strokeWidth="0.8" />
        <rect x="51" y="81" width="18" height="3" rx="1.5" fill="url(#baseMetalGrad)" stroke="#1A2D4C" strokeWidth="0.8" />
        <rect x="52" y="85" width="16" height="3" rx="1.5" fill="url(#baseMetalGrad)" stroke="#1A2D4C" strokeWidth="0.8" />

        {/* Base Contact Point */}
        <path d="M54 88C54 90.2091 56.6863 92 60 92C63.3137 92 66 90.2091 66 88H54Z" fill="#1E293B" stroke="#0F172A" strokeWidth="0.8" />
      </svg>
    </div>
  );
}
