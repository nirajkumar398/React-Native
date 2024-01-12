import { useEffect, useState } from 'react';
import TrackPlayer from 'react-native-track-player';

const useAudioPlayer = () => {
  const [playerInitialized, setPlayerInitialized] = useState(false);

  useEffect(() => {
    async function setupAudioPlayer() {
      try {
        if (!playerInitialized) {
          console.log('Setting up TrackPlayer...');
          await TrackPlayer.setupPlayer();
          console.log('Adding track...');
          await TrackPlayer.add({
            id: 'zomato',
            url: require('../assets/audio/zomato.mp3'),
            title: 'Checkout',
            artist: 'Zomato',
          });
          console.log('TrackPlayer setup complete.');
          setPlayerInitialized(true);
        }
      } catch (error) {
        // console.error('Error setting up TrackPlayer:', error);
      }
    }

    setupAudioPlayer();

    return () => {
      console.log('Stopping and resetting TrackPlayer...');
      TrackPlayer.stop();
      TrackPlayer.reset();
      setPlayerInitialized(false); // Reset player initialization status on unmount
    };
  }, []);

  const playSound = async () => {
    try {
      console.log('Playing sound...');
      await TrackPlayer.play();
      console.log('Sound playback started.');
    } catch (error) {
      // console.error('Error playing sound:', error);
    }
  };

  return {
    playSound,
  };
};

export default useAudioPlayer;
