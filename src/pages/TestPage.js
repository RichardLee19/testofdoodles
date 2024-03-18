import React, { useState, useEffect } from 'react';

export default function TestPage({ changePage }) {
    const [location, setLocation] = useState(null);
    const [speed, setSpeed] = useState(null);

    //Richard
    //handle logout
    function logout() {
        fetch(window.location.origin + "/logout", {
            method: 'GET'
        })
        .then(response => {
            //Richard
            //checks if the response is okay
            if (response.ok) {
                console.log("logout response received ", response)
            } else {
                console.log("logout error")
            }
        })
    }

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                    // Set user's speed
                    setSpeed(position.coords.speed);
                }, (error) => {
                    console.error('Error getting geolocation:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    useEffect(() => {
        const watchUserLocation = () => {
            const options = {
                enableHighAccuracy: true,
                timeout: 1000,
                maximumAge: 0
            };

            const success = (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
                // Set user's speed
                setSpeed(position.coords.speed);
            };

            const error = (err) => {
                console.error('Error getting geolocation:', err);
            };

            const id = navigator.geolocation.watchPosition(success, error, options);

            return () => navigator.geolocation.clearWatch(id);
        };

        watchUserLocation();
    }, []); // Empty dependency array to run once when component mounts

    //Richard
    //render buttons that all call the changePage function 
    return (
        <div>
            <button onClick={() => {changePage("Login")}}>Login Page!</button>
            <button onClick={() => {changePage("Garage")}}>Garage Page!</button>
            <button onClick={() => {changePage("Home")}}>Home Page!</button>
            <button onClick={() => {changePage("Camera")}}>Camera Page!</button>
            <button onClick={logout}>Log Out</button>

            {/* Test button to get location */}
            <button onClick={getLocation}>Get Location</button>
            {location && (
                <p>
                    Latitude: {location.latitude}, Longitude: {location.longitude}
                    {speed && <span>, Speed: {speed} m/s</span>}
                </p>
            )}
        </div>
    );
}
