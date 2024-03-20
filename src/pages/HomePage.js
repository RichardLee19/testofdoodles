import './HomePage.css';
import Ferrari from "../images/ferrari.png";
import Testa from "../images/testa_rossa.jpeg";
import Ford from "../images/ford.png";
import FordGT from "../images/ford-gt40.jpg";
import Search from "../images/search.png";
import Filter  from "../images/filter.png";
import Porsche from "../images/porsche-_car.jpg";
import PorLogo from "../images/porsche.png";
import NoZoomOnTextBox from '../components/NoZoomOnText';

export default function HomePage({changePage}){

    //the main return to display the home page or main feed
    return (
        <div>
            <NoZoomOnTextBox />
            <div className="searchPad">
                <img src={Filter}/>
                <p> Filters: Only the coolest cars (Not objective at all)</p>
                <img src={Search}/>
                
            </div>
            <ul className="content">
                <div className="post">
                    <div className="cardHeader">
                        <img src={Ferrari}/>
                        <h2>Ferrari 250 Testa Rossa</h2>
                    </div>
                    
                    <div className="main">
                        <img src={Testa}/>
                        <div>
                            <p>
                                <b>Weight: </b> 794 kg<br/>
                                <b>Engine: </b> 3L V12<br/>
                                <b>Top Speed: </b>270 kph<br/>
                                <b>Horse Power: </b> 300 <br/>
                                <br/>
                                <b>Catches: </b> 2 <br/>
                                <b>Caught </b><i>April 3, 2023</i>
                            </p>
                            
                        </div>
                        
                    </div>
                    
                </div>
                <div className="post">
                    <div className="cardHeader">
                        <img src={Ford}/>
                        <h2 className="ford">Ford GT40</h2>
                    </div>
                    
                    <div className="main">
                        <img src={FordGT}/>
                        <div>
                            <p>
                                <b>Weight: </b> 865 kg<br/>
                                <b>Engine: </b> 5L V8<br/>
                                <b>Top Speed: </b>341 kph<br/>
                                <b>Horse Power: </b> 492 <br/>
                                <br/>
                                <b>Catches: </b> 1 <br/>
                                <b>Caught </b><i>May 9, 2021</i>
                            </p>
                            
                        </div>
                        
                    </div>
                    
                </div>
                <div className="post">
                    <div className="cardHeader">
                        <img src={PorLogo}/>
                        <h2>Porsche 911 964 (1991)</h2>
                    </div>
                    
                    <div className="main">
                        <img src={Porsche}/>
                        <div>
                            <p>
                                <b>Weight: </b> 1467 kg<br/>
                                <b>Engine: </b> 3.3L H6<br/>
                                <b>Top Speed: </b>272 kph<br/>
                                <b>Horse Power: </b> 320 <br/>
                                <br/>
                                <b>Catches: </b> 17 <br/>
                                <b>Caught </b><i>May 5, 2021</i>
                            </p>
                            
                        </div>
                        
                    </div>
                    
                </div>
                <div className="post">
                    <div className="cardHeader">
                        <img src={Ford}/>
                        <h2 className="ford">Ford GT40</h2>
                    </div>
                    
                    <div className="main">
                        <img src={FordGT}/>
                        <div>
                            <p>
                                <b>Weight: </b> 865 kg<br/>
                                <b>Engine: </b> 5L V8<br/>
                                <b>Top Speed: </b>341 kph<br/>
                                <b>Horse Power: </b> 492 <br/>
                                <br/>
                                <b>Catches: </b> 1 <br/>
                                <b>Caught </b><i>May 9, 2021</i>
                            </p>
                            
                        </div>
                        
                    </div>
                    
                </div>
                <div className="post">
                    <div className="cardHeader">
                        <img src={Ferrari}/>
                        <h2>Ferrari 250 Testa Rossa</h2>
                    </div>
                    
                    <div className="main">
                        <img src={Testa}/>
                        <div>
                            <p>
                                <b>Weight: </b> 794 kg<br/>
                                <b>Engine: </b> 3L V12<br/>
                                <b>Top Speed: </b>270 kph<br/>
                                <b>Horse Power: </b> 300 <br/>
                                <br/>
                                <b>Catches: </b> 2 <br/>
                                <b>Caught </b><i>April 3, 2023</i>
                            </p>
                            
                        </div>
                        
                    </div>
                    
                </div>
                <div className="post">
                    <div className="cardHeader">
                        <img src={Ford}/>
                        <h2 className="ford">Ford GT40</h2>
                    </div>
                    
                    <div className="main">
                        <img src={FordGT}/>
                        <div>
                            <p>
                                <b>Weight: </b> 865 kg<br/>
                                <b>Engine: </b> 5L V8<br/>
                                <b>Top Speed: </b>341 kph<br/>
                                <b>Horse Power: </b> 492 <br/>
                                <br/>
                                <b>Catches: </b> 1 <br/>
                                <b>Caught </b><i>May 9, 2021</i>
                            </p>
                            
                        </div>
                        
                    </div>
                    
                </div>
            </ul>

         <button onClick={() => {changePage("Test")}}>Go to Test Page</button>
            
        </div>
        
    )
};