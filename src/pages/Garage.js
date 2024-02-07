// Garage.js
import React from 'react';
import './Garage.css';
//import BMWLogo from '../images/BMWlogo.png';

export default function Garage() {
    return (
        <div className="garageContainer">
            <div className="userInfo">
                <div className="userProfile">
                    <img src="profile-picture-url" alt="Profile" />
                    <div className="username">Username</div>
                </div>
                <div className="userStats">
                    <div className="userStatsItem">
                        <div>Followers</div>
                        <div>100</div>
                    </div>
                    <div className="userStatsItem">
                        <div>Following</div>
                        <div>50</div>
                    </div>
                    <div className="userStatsItem">
                        <div>Catches</div>
                        <div>25</div>
                    </div>
                </div>
            </div>
            <div className="carViewOptions">
                <button>Grid View</button>
                <button>List View</button>
            </div>
            <div className="carGrid">
                {/* Car brand logos will be rendered here */}
                <div className="carItem">
                    <img src= "../images/BMWlogo.png" alt="BMW Logo" />
                </div>
                {/* Add more car items as needed */}
            </div>
            {/* Or, for list view */}
            {/* <ul className="carList">
                <li>Car Brand 1</li>
                <li>Car Brand 2</li>
                <li>Car Brand 3</li>
                // Add more list items as needed
            </ul> */}
        </div>
    );
}
