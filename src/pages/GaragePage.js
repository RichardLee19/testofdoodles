import React, { useState, useEffect } from 'react';

import './HomePage.css';
import './GaragePage.css';
// import AcuraLogo from "..images/CarLogos/AcuraLogo.png"; find new Acura logo cause this broken
import AudiLogo from "../images/CarLogos/AudiLogo.jpg";
import BMWLogo from '../images/CarLogos/BMWLogo.png';
import InfinitiLogo from '../images/CarLogos/InfinitiLogo.png';
import PorscheLogo from '../images/CarLogos/PorscheLogo.jpg';
import TeslaLogo from '../images/CarLogos/TeslaLogo.png';
import ToyotaLogo from '../images/CarLogos/ToyotaLogo.jpg';
import VolvoLogo from '../images/CarLogos/VolvoLogo.png';
import VWLogo from '../images/CarLogos/VWLogo.png';
import ProfilePic from '../images/DefaultProfilePicture.png';

export default function Garage({changePage}) {

    const [followers, setFollowers] = useState(-1)
    const [following, setFollowing] = useState(-1)
    const [catches, setCatches] = useState(-1)
    const [displayname, setDisplayname] = useState("")

    // Import useEffect if not already imported

// Define your mock data
const mockData = {
  followers: 1000,
  following: 500,
  catches: 50,
  displayname: "John Doe"
};

// Define a mock fetch function
const mockFetch = async () => {
  return {
    ok: true,
    json: async () => mockData
  };
};

// Inside your component
useEffect(() => {
  const fetchData = async () => {
    try {
      // Use your mockFetch function instead of fetch
      const response = await mockFetch();

      // Proceed with setting state using mock data
      setFollowers(response.jsonData.followers);
      setFollowing(response.jsonData.following);
      setCatches(response.jsonData.catches);
      setDisplayname(response.jsonData.displayname);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);


    return (
        <div className="garageContainer">
            <div className="userInfo">
                <div className="userProfile">
                    <img src={ProfilePic} />
                    <div className="displayname">{displayname}</div>
                </div>
                <div className="userStats">
                    <div className="userStatsItem">
                        <div>Followers</div>
                        <div>{followers}</div>
                    </div>
                    <div className="userStatsItem">
                        <div>Following</div>
                        <div>{following}</div>
                    </div>
                    <div className="userStatsItem">
                        <div>Catches</div>
                        <div>{catches}</div>
                    </div>
                </div>
            </div>
            <div className="carViewOptions">
                <button>Grid View</button>
                <button>List View</button>
            </div>
            <div className="carGrid">
                {/* Car brand logos will be rendered here */}
                {/* <div className="carItem">
                    <img src = {AcuraLogo}/> Find new Acura Logo, cause this shit is brocken
                </div> */}
                <div className="carItem">
                    <img src = {AudiLogo}/>
                </div>
                <div className="carItem">
                    <img src = {BMWLogo}/>
                </div>
                <div className="carItem">
                    <img src = {InfinitiLogo}/>
                </div>
                <div className="carItem">
                    <img src = {PorscheLogo}/>
                </div>
                <div className="carItem">
                    <img src = {TeslaLogo}/>
                </div>
                <div className="carItem">
                    <img src = {ToyotaLogo}/>
                </div>
                <div className="carItem">
                    <img src = {ToyotaLogo}/>
                </div>
                <div className="carItem">
                    <img src = {VolvoLogo}/>
                </div>
                <div className="carItem">
                    <img src = {VWLogo}/>
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

<button onClick={changePage("Test")}>Go to Test Page</button>
        </div>
    );
}