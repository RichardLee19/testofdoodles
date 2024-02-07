// Garage.js
import React from 'react';
import './Garage.css';
// import AcuraLogo from "..images/CarLogos/AcuraLogo.png";
import AudiLogo from "../images/CarLogos/AudiLogo.jpg";
import BMWLogo from '../images/CarLogos/BMWLogo.png';
import InfinitiLogo from '../images/CarLogos/InfinitiLogo.png';
import PorscheLogo from '../images/CarLogos/PorscheLogo.jpg';
import TeslaLogo from '../images/CarLogos/TeslaLogo.png';
import ToyotaLogo from '../images/CarLogos/ToyotaLogo.jpg';
import VolvoLogo from '../images/CarLogos/VolvoLogo.png';
import VWLogo from '../images/CarLogos/VWLogo.png';
import ProfilePic from '../images/DefaultProfilePicture.png';

export default function Garage() {
    return (
        <div className="garageContainer">
            <div className="userInfo">
                <div className="userProfile">
                    <img src={ProfilePic} />
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
        </div>
    );
}
