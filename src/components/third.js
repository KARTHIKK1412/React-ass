import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCalculator, faCheck, faDesktop, faGear, faGears, faHeart, faPerson, faPhone, faRobot, faTv, faW } from "@fortawesome/free-solid-svg-icons";

export default function Third(){
    return(
        <div className='container mt-5'>
                <div className="row">
                    <div className="col-lg-12 text-center text-primary">
                        <h3>Our Services</h3>
                    </div>
                </div>
                
                <div className="row mt-3 text-center">
                    <div className="col-lg-12 ">
                        <p>Game Development is the art of creating games and describes the design, development and release of a game. 
                         It may involve concept generation, design, build, test and release.</p>
                    </div>
                </div>
        
                <div className="row mt-3 justify-content-center ">
                    <div className="row col-lg-12">
                    <div className="col-lg-2">&nbsp;</div>
                        <div className="col-lg-2 d-flex bg-secondary">
                            <FontAwesomeIcon icon={faTv} fontSize="25px" className="mt-2"></FontAwesomeIcon>
                            <p className="ml-3 mt-2">WEB DESIGN</p>
                        </div>

                        <div className="col-lg-1">&nbsp;</div>
                        <div className="col-lg-2 d-flex bg-secondary">
                            <FontAwesomeIcon icon={faDesktop} fontSize="25px" className="mt-2"></FontAwesomeIcon>
                            <p className="ml-3 mt-2">WEB DEVELOPMENT</p>
                        </div>

                        <div className="col-lg-1">&nbsp;</div>
                        <div className="col-lg-2 d-flex bg-secondary">
                            <FontAwesomeIcon icon={faGear} fontSize="20px" className="mt-2"></FontAwesomeIcon>
                            <p className="ml-3 mt-2 serv" fontSize="10%">THEME DEVELOPMENT</p>
                            <div className="col-lg-2">&nbsp;</div>
                        </div>
                    </div>
                </div>


                <div className="row mt-4 justify-content-center ">
                    <div className="row col-lg-12 text-center">
                    <div className="col-lg-2">&nbsp;</div>
                        <div className="col-lg-2 d-flex bg-secondary">
                            <FontAwesomeIcon icon={faGears} fontSize="25px" className="mt-2"></FontAwesomeIcon>
                            <p className="ml-3 mt-2">GAME DEVELOPMENT</p>
                        </div>

                        <div className="col-lg-1">&nbsp;</div>
                        <div className="col-lg-2 d-flex bg-secondary">
                            <FontAwesomeIcon icon={faRobot} fontSize="25px" className="mt-2"></FontAwesomeIcon>
                            <p className="ml-3 mt-2">APPS DEVELOPMENT</p>
                        </div>

                        <div className="col-lg-1">&nbsp;</div>
                        <div className="col-lg-2 d-flex bg-secondary">
                            <FontAwesomeIcon icon={faDesktop} fontSize="25px" className="mt-2"></FontAwesomeIcon>
                            <p className="ml-3 mt-2 serv" fontSize="2px">DESKTOP APPLICATION</p>
                            <div className="col-lg-2">&nbsp;</div>

                        </div>
                    </div>
                </div>


                <div className="row mt-4 justify-content-center">
                    <div className="row col-lg-12 text-center">
                    <div className="col-lg-2">&nbsp;</div>
                        <div className="col-lg-2 d-flex bg-secondary">
                            <FontAwesomeIcon icon={faW} fontSize="25px" className="mt-2"></FontAwesomeIcon>
                            <p className="ml-3 mt-2">WORDPRESS THEME</p>
                        </div>

                        <div className="col-lg-1">&nbsp;</div>
                        <div className="col-lg-2 d-flex bg-secondary">
                            <FontAwesomeIcon icon={faGear} fontSize="25px" className="mt-2"></FontAwesomeIcon>
                            <p className="ml-3 mt-2">WORKPRESS PLUGINS</p>
                        </div>

                        <div className="col-lg-1">&nbsp;</div>
                        <div className="col-lg-2 d-flex bg-secondary">
                            <FontAwesomeIcon icon={faPhone} fontSize="25px" className="mt-2"></FontAwesomeIcon>
                            <p className="ml-3 mt-2">SUPPORT & IT</p>
                            <div className="col-lg-2">&nbsp;</div>

                        </div>
                    </div>
                </div>


                <div className="mt-5">
                    <div className=" row  text-center bg-primary">

                        <div className="col-lg-3 mt-3">
                            <FontAwesomeIcon icon={faCalculator} fontSize="30px" className="mt-1">  </FontAwesomeIcon>
                            <h1>12+</h1>
                            <p>YEARS OF EXPERIANCE</p>
                        </div>

                        <div className="col-lg-3 mt-3">
                            <FontAwesomeIcon icon={faCheck} fontSize="30px" className="mt-1">  </FontAwesomeIcon>
                            <h1>999+</h1>
                            <p>COMPLETED PROJECT</p>
                        </div>

                        <div className="col-lg-3 mt-3">
                            <FontAwesomeIcon icon={faPerson} fontSize="30px" className="mt-1">  </FontAwesomeIcon>
                            <h1>480+</h1>
                            <p>TOTAL CLIENTS</p>
                        </div>

                        <div className="col-lg-3 mt-3">
                            <FontAwesomeIcon icon={faHeart} fontSize="30px" className="mt-1">  </FontAwesomeIcon>
                            <h1>15+</h1>
                            <p>AWARD WON</p>
                        </div>

                    </div>
                </div>
        </div>
    )
}