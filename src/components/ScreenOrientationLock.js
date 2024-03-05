import React, { useEffect } from 'react';

function ScreenOrientationLock() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'orientation' in window.screen) {
      window.screen.orientation.lock('landscape')
        .then(() => console.log('Screen orientation locked'))
        .catch((err) => console.error('Failed to lock screen orientation:', err));
    } else {
      console.warn('Screen orientation API not supported');
    }

    // Cleanup function to unlock the screen orientation when the component unmounts
    return () => {
      if (typeof window !== 'undefined' && 'orientation' in window.screen) {
        window.screen.orientation.unlock();
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
}

export default ScreenOrientationLock;
