/**
 * Emotion Profiles & Adaptive Intervention Engine (Cherry Blossom Dusk & Soundwave Edition)
 * Maps the 5 core emotional states to specific music, lighting, and environmental actions:
 * 1. Happy -> Reinforce the mood: Upbeat music, brighter lighting
 * 2. Sad -> Comforting response: Warmer lighting, calming/uplifting music, softer tone
 * 3. Stressed/Angry -> De-escalate: Dim lighting, calming music, suggest a break
 * 4. Calm/Neutral -> Baseline state: Ambient settings, no major intervention
 * 5. Tired/Fatigued -> Adjust for rest: Dim/warm lighting, wind-down playlist, lower thermostat
 */

export const EMOTION_PROFILES = {
  happy: {
    id: 'happy',
    name: 'Happy',
    emoji: '😄',
    category: 'Positive / High Energy',
    goal: 'Reinforce the mood',
    actionSummary: 'Upbeat music & brighter vibrant lighting',
    lighting: {
      mode: 'Bright & Radiant Daylight',
      level: '90%',
      colorCode: '#C98E8D',
      tone: 'Cool Daylight (6500K)',
      description: 'Maximized brightness to sustain dopamine and elevated mood.',
    },
    environment: {
      thermostat: '72°F (Active)',
      sensory: 'Vibrant Ambiance',
      breakSuggestion: null,
    },
    track: {
      title: 'Sunlight Grooves (Upbeat Mix)',
      artist: 'Surfaces & Elton John',
      album: 'Pacific Vibrations',
      coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80',
      matchedEmotion: 'Happy',
      confidence: '94%',
      bpm: '124 BPM',
      vibe: 'Upbeat & Joyful Grooves',
    },
    meters: [
      { emoji: '😄', label: 'Happiness & Joy', percent: 94, status: 'Peak Energy', accentColor: 'var(--palette-blush-rose)' },
      { emoji: '⚡', label: 'Energy & Tempo', percent: 88, status: 'High', accentColor: 'var(--palette-wave-cyan)' },
      { emoji: '😌', label: 'Calmness', percent: 55, status: 'Balanced', accentColor: 'var(--palette-plum-mauve)' },
      { emoji: '🔋', label: 'Vitality Score', percent: 92, status: 'Maximum', accentColor: 'var(--palette-blush-rose)' },
    ],
    intervention: {
      badge: 'Reinforce Mood',
      heading: 'Amplifying Your Positive Energy',
      rule: 'Happy — reinforce the mood: upbeat music, brighter lighting',
      text: 'Playing uplifting, high-tempo beats and brightening your ambient screen lighting to ride the positive momentum.',
      tip: '💡 Tip: You are in peak creative flow! Ideal time for collaborative ideas or tackling challenges.',
    },
  },

  sad: {
    id: 'sad',
    name: 'Sad',
    emoji: '🥺',
    category: 'Gentle Comfort & Care',
    goal: 'Comforting response',
    actionSummary: 'Warmer lighting, calming/uplifting music, softer tone',
    lighting: {
      mode: 'Warm Candlelight Glow',
      level: '55%',
      colorCode: '#63434E',
      tone: 'Warm Amber (2700K)',
      description: 'Softened warm lighting to create a soothing, non-intrusive sanctuary.',
    },
    environment: {
      thermostat: '73°F (Cozy)',
      sensory: 'Warm Comfort Space',
      breakSuggestion: 'Gentle stretch & cup of warm tea',
    },
    track: {
      title: 'Breathe Again (Acoustic Uplift)',
      artist: 'Olafur Arnalds & Bon Iver',
      album: 'Gentle Horizons',
      coverUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=400&q=80',
      matchedEmotion: 'Sad',
      confidence: '89%',
      bpm: '76 BPM',
      vibe: 'Comforting Acoustic & Warmth',
    },
    meters: [
      { emoji: '🥺', label: 'Emotional Heaviness', percent: 89, status: 'Elevated', accentColor: 'var(--palette-wave-magenta)' },
      { emoji: '🕊️', label: 'Comfort Response', percent: 84, status: 'Active', accentColor: 'var(--palette-blush-rose)' },
      { emoji: '😌', label: 'Relaxation Level', percent: 48, status: 'Soothing', accentColor: 'var(--palette-plum-mauve)' },
      { emoji: '🔋', label: 'Energy Level', percent: 38, status: 'Gentle', accentColor: 'var(--palette-lavender-mist)' },
    ],
    intervention: {
      badge: 'Comforting Care',
      heading: 'Gentle Comfort & Reassurance',
      rule: 'Sad — comforting response: warmer lighting, calming/uplifting music, softer tone',
      text: 'Switching to warm, soothing ambient lighting, softening audio dynamics, and playing comforting acoustic tracks with gentle uplifting resolutions.',
      tip: '💡 Tip: Take all the time you need. Auren is keeping your environment cozy and comforting.',
    },
  },

  stressed: {
    id: 'stressed',
    name: 'Stressed / Angry',
    emoji: '😤',
    category: 'De-escalation & Calm',
    goal: 'De-escalate tension',
    actionSummary: 'Dim lighting, calming music, suggest a break',
    lighting: {
      mode: 'Dim Dusk Atmosphere',
      level: '30%',
      colorCode: '#141F2A',
      tone: 'Deep Slate Soft (2200K)',
      description: 'Dimmed down significantly to minimize optical irritation and lower cortisol.',
    },
    environment: {
      thermostat: '70°F (Cooling Down)',
      sensory: 'Stress De-escalation',
      breakSuggestion: 'Recommended: 2-minute screen break & deep belly breathing',
    },
    track: {
      title: 'Deep Ocean Waves (Theta Frequencies)',
      artist: 'Brian Eno & Marconi Union',
      album: 'Restorative Frequencies',
      coverUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
      matchedEmotion: 'Stressed / Angry',
      confidence: '91%',
      bpm: '54 BPM',
      vibe: 'Binaural Theta Relaxation',
    },
    meters: [
      { emoji: '😤', label: 'Facial Tension / Strain', percent: 91, status: 'High Tension', accentColor: 'var(--palette-wave-magenta)' },
      { emoji: '🌿', label: 'De-escalation Engine', percent: 86, status: 'Intervening', accentColor: 'var(--palette-blush-rose)' },
      { emoji: '💓', label: 'Pace Reduction', percent: 78, status: 'Slowing Down', accentColor: 'var(--palette-plum-mauve)' },
      { emoji: '😌', label: 'Calmness Level', percent: 26, status: 'Restoring', accentColor: 'var(--palette-lavender-mist)' },
    ],
    intervention: {
      badge: 'De-escalate Mode',
      heading: 'De-escalating Tension & Stress',
      rule: 'Stressed/Angry — de-escalate: dim lighting, calming music, maybe suggest a break',
      text: 'Dimming ambient screen brightness to 30%, engaging 54 BPM theta soundscapes to slow heart rate, and suggesting a 2-minute breather.',
      tip: '⚠️ Break Suggested: Step away for 2 minutes. Unclench your jaw, drop your shoulders, and inhale deeply for 4 counts, exhale for 6.',
    },
  },

  calm: {
    id: 'calm',
    name: 'Calm / Neutral',
    emoji: '😌',
    category: 'Balanced Baseline',
    goal: 'Maintain baseline equilibrium',
    actionSummary: 'Ambient settings, no major intervention',
    lighting: {
      mode: 'Natural Ambient Balance',
      level: '65%',
      colorCode: '#C98E8D',
      tone: 'Neutral Daylight (4500K)',
      description: 'Standard balanced ambient lighting tuned for relaxed productivity.',
    },
    environment: {
      thermostat: '71°F (Optimal)',
      sensory: 'Equilibrium Baseline',
      breakSuggestion: null,
    },
    track: {
      title: 'Weightless (Deep Ambient)',
      artist: 'Marconi Union',
      album: 'Ambient Transmissions',
      coverUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80',
      matchedEmotion: 'Calm / Neutral',
      confidence: '88%',
      bpm: '60 BPM',
      vibe: 'Peaceful Ambient Flow',
    },
    meters: [
      { emoji: '😌', label: 'Calm & Relaxed', percent: 88, status: 'Optimal', accentColor: 'var(--palette-blush-rose)' },
      { emoji: '⚡', label: 'Focus & Concentration', percent: 74, status: 'Steady', accentColor: 'var(--palette-wave-cyan)' },
      { emoji: '😊', label: 'Happiness & Joy', percent: 62, status: 'Balanced', accentColor: 'var(--palette-plum-mauve)' },
      { emoji: '🔋', label: 'Energy Level', percent: 60, status: 'Stable', accentColor: 'var(--palette-lavender-mist)' },
    ],
    intervention: {
      badge: 'Baseline State',
      heading: 'Natural Ambient Flow',
      rule: 'Calm/Neutral — baseline state, ambient settings, no major intervention',
      text: 'Maintaining standard ambient screen lighting and unobtrusive background lofi/ambient textures. No active intervention needed.',
      tip: '💡 Tip: You are in an ideal flow state. Auren will stay quietly in the background without interruptions.',
    },
  },

  tired: {
    id: 'tired',
    name: 'Tired / Fatigued',
    emoji: '🥱',
    category: 'Rest & Wind-Down',
    goal: 'Adjust for rest and recovery',
    actionSummary: 'Dim/warm lighting, wind-down playlist, lower thermostat',
    lighting: {
      mode: 'Ultra-Dim Dusk Amber',
      level: '25%',
      colorCode: '#63434E',
      tone: 'Night Filter (1800K, Zero Blue Light)',
      description: 'Deeply dimmed warm amber light to facilitate melatonin production and rest.',
    },
    environment: {
      thermostat: '68°F (Cool for Sleep)',
      sensory: 'Wind-Down Sanctuary',
      breakSuggestion: 'Recommended: Power nap or wrap up screen time for bed',
    },
    track: {
      title: 'Starlight Lullaby & Sleep Drift',
      artist: 'Max Richter & Sleep Project',
      album: 'From Sleep & Dreams',
      coverUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80',
      matchedEmotion: 'Tired / Fatigued',
      confidence: '93%',
      bpm: '48 BPM',
      vibe: 'Ultra-Soft Sleep Drift',
    },
    meters: [
      { emoji: '🥱', label: 'Fatigue & Sleepiness', percent: 93, status: 'Very High', accentColor: 'var(--palette-lavender-mist)' },
      { emoji: '🔋', label: 'Remaining Energy', percent: 18, status: 'Depleted', accentColor: 'var(--palette-plum-mauve)' },
      { emoji: '🌙', label: 'Rest Readiness', percent: 90, status: 'Ready for Sleep', accentColor: 'var(--palette-blush-rose)' },
      { emoji: '😴', label: 'Eye Strain Indicator', percent: 86, status: 'Heavy Blinks', accentColor: 'var(--palette-slate-deep)' },
    ],
    intervention: {
      badge: 'Rest & Wind-Down',
      heading: 'Adjusting for Rest & Wind-Down',
      rule: 'Tired/Fatigued — adjust for rest: dim/warm lighting, wind-down playlist, maybe lower thermostat',
      text: 'Lowering lighting to ultra-dim warm night tones (25%), queuing delta-wave sleep soundscapes, and adjusting virtual climate to 68°F for restful sleep.',
      tip: '🌙 Rest Advice: Heavy eye blinks detected. Auren recommends wrapping up current tasks, dimming physical room lights, and resting.',
    },
  },
};
