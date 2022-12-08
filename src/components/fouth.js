import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCableCar } from "@fortawesome/free-solid-svg-icons";
import Image1 from './img1.jpg';
import Image2 from './img2.jpg';
import Image3 from './img3.jpg';
import Image4 from './img4.jpg';
import Image5 from './img5.jpg';
import Image6 from './img6.jpg';


export default function Fouth(){
    return(
        <div className="container mt-5">
            <div className="row">
            <div className="col-lg-4">&nbsp;</div>
            <div className="col-lg-4 text-center text-primary">
                <h2>Our Portfolio</h2>
            </div>
            <div className="col-lg-4">&nbsp;</div>
            </div>

            <div className="row text-center mt-5">
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-10">
                    <p>A portfolio is a collection of financial investments like stocks, bonds, commodities, cash, and cash equivalents, 
                        as well as their fund counterparts.</p>
                </div>
                <div className="col-lg-1">&nbsp;</div>
            </div>
           
                <div className="row text-primary mt-5 text-center ">
                    <div className="col-lg-3">
                        <h5>ALL</h5>
                    </div>
                    <div className="col-lg-3">
                        <h5>WEB DEVELOPMENT</h5>
                    </div>
                    <div className="col-lg-3">
                        <h5>GAME DEVELOPMENT</h5>
                    </div>
                    <div className="col-lg-3">
                        <h5>APP DEVELOPMENT</h5>
                    </div>   
                </div>


            <div className="row mt-5">
                <div className="col-lg-4">
                    <img src={Image1} className="w-100 image-fluid" alt="image"/>
                </div>
                <div className="col-lg-4">
                    <img src={Image2} className="w-100 image-fluid" alt="image"/>
                </div>
                <div className="col-lg-4">
                        <img src={Image3} className="w-100 image-fluid" alt="image"/>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-4">
                    <img src={Image4} className="w-100 image-fluid" alt="image"/>
                </div>
                <div className="col-lg-4">
                    <img src={Image5} className="w-100 image-fluid" alt="image"/>
                </div>
                <div className="col-lg-4">
                    <img src={Image6} className="w-100 image-fluid" alt="image"/>
                </div>
            </div>
    
        </div>
    )
}