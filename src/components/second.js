import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHistory} from "@fortawesome/free-solid-svg-icons";

export default function Second(){
    return(
    <>
        <div className='container'>
                <div className='col-lg-12 text-center text-primary'>
                    <h5 className=''>Welcome To Our Website</h5>
                </div>

                <div className='col-lg-12 text-center'>
                    <p>Game Development is the art of creating games and describes the design, development and release of a game. 
                        It may involve concept generation, design, build, test and release. While you create a game, it is important
                         to think about the game mechanics, rewards, player engagement and level design.Game Development is the art of 
                         creating game and describes the design, development and release of a game. 
                        It may involve concept generation, design, build, test and release. While you create a game, it is important
                         to think about the game mechanics, rewards, player engagement and level design.</p>
                </div>

                <div className="col-lg-12 text-center mt-5">    
                    <button type="button" className="button">Read more</button>
                </div>
             
                <div className="row text-center text-white mt-5">
                    <div className="col-lg-4 bg-primary">
                        <FontAwesomeIcon icon={faHistory} classname="mt-2" fontSize="20px"/>
                        <h6 className="mt-2">Our Story</h6>
                        <p>Game Development is the art of creating games and describes the design, development and release of a game. 
                        It may involve concept generation, design, build, test and release. While you create a game, it is important
                         to think about the game mechanics, rewards, player engagement and level design.</p>
                    </div>
              

                    <div className="col-lg-4 bg-dark">
                    <FontAwesomeIcon icon={faHistory} fontSize="20px"/>
                        <h6 className="mt-2">Our Mission</h6>
                        <p>Game Development is the art of creating games and describes the design, development and release of a game. 
                        It may involve concept generation, design, build, test and release. While you create a game, it is important
                         to think about the game mechanics, rewards, player engagement and level design.</p>
                    </div>
                

                    <div className="col-lg-4 bg-primary">
                    <FontAwesomeIcon icon={faHistory} fontSize="20px"/>
                        <h6 className="mt-2">Our Vision</h6>
                        <p>Game Development is the art of creating games and describes the design, development and release of a game. 
                        It may involve concept generation, design, build, test and release. While you create a game, it is important
                         to think about the game mechanics, rewards, player engagement and level design.</p>
                    </div>
                </div>




        </div>
    </>
    )
}
