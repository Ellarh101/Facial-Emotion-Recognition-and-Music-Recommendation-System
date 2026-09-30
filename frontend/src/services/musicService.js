/**
 * Music Recommendation Service Placeholder
 * Future home for Spotify Web API integration or mood-based music recommendations.
 */

/**
 * Maps detected facial emotion to music audio parameters (valence, energy, tempo).
 * @param {string} emotion Detected emotion string
 */
export function getAudioProfileForEmotion(emotion) {
  switch (emotion?.toLowerCase()) {
    case 'happy':
      return { minValence: 0.7, minEnergy: 0.6, targetDanceability: 0.7 };
    case 'sad':
      return { maxValence: 0.4, maxEnergy: 0.4, targetAcousticness: 0.8 };
    case 'angry':
      return { maxValence: 0.5, minEnergy: 0.8, targetTempo: 130 };
    case 'calm':
    case 'neutral':
    default:
      return { minValence: 0.4, maxEnergy: 0.5, targetAcousticness: 0.5 };
  }
}

/**
 * Recommends tracks according to detected emotion state (Placeholder).
 * @param {string} emotion
 */
export async function recommendTracksByEmotion(emotion) {
  console.log(`[MusicService] Fetching recommendation for emotion: ${emotion}`);
  return [
    {
      id: 'mock-1',
      title: 'Weightless',
      artist: 'Marconi Union',
      album: 'Ambient Transmissions',
      matchedEmotion: emotion || 'Neutral',
      confidence: '90%',
    },
  ];
}
