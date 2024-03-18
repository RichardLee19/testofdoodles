import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import TestPage from './pages/TestPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import GaragePage from './pages/GaragePage';
import Garage from './pages/Garage';
import CameraPage from './pages/CameraPage';
import CatchPage from './pages/CatchPage';
import ScreenOrientationLock from './components/ScreenOrientationLock';

function App() {
  const [activePage, setActivePage] = useState(null);
  const [imageSrc, setImageSource] = useState("");
  const [isDriving, setIsDriving] = useState(false); // State for tracking if user is driving

  useEffect(() => {
    const watchUserLocation = () => {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      const success = (position) => {
        const { speed } = position.coords;
        // Speed is in meters per second, convert to km/h
        const speedKMH = speed * 3.6;
        console.log('User speed (km/h):', speedKMH);
        
        // Check if the user is traveling too fast
        if (speedKMH > 20) { // Adjust the threshold as needed
          setIsDriving(true);
        } else {
          setIsDriving(false);
        }
      };

      const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      };

      const id = navigator.geolocation.watchPosition(success, error, options);

      return () => navigator.geolocation.clearWatch(id);
    };

    const watchId = watchUserLocation();

    return () => navigator.geolocation.clearWatch(watchId);
  }, []); // Run effect only once when component mounts

  const handleConfirmation = () => {
    console.log("User confirmed not driving. Proceeding...");
    setIsDriving(false);
  };

  const changePage = (page) => {
    console.log("PAGE SENT: " + page);
    switch(page) {
      case "Login":
        setActivePage(<LoginPage changePage={changePage}/>);
        break;
      case "Garage":
        setActivePage(<GaragePage changePage={changePage}/>);
        break;
      case "Home":
        setActivePage(<HomePage changePage={changePage}/>);
        break;
      case "Camera":
        setActivePage(<CameraPage changePage={changePage} setSource={setImageSource}/>);
        break;
      case "Test":
        setActivePage(<TestPage changePage={changePage}/>);
        break;
      case "Catch":
        setActivePage(<CatchPage changePage={changePage} iSource={imageSrc}/>);
        break;
      default:
        setActivePage(<TestPage changePage={changePage}/>);
        break;
    }
  }

  return (
    <>
      <div className="app">
        {activePage ? activePage : <TestPage changePage={changePage} />}
      </div>
      {isDriving && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Are you currently driving?</h2>
            <p>Please confirm that you are not driving and accept full responsibility for anything that may occur.</p>
            <button onClick={handleConfirmation}>I Agree</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
