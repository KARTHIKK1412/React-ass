import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

import Image from './img1.jpg';
import Image1 from './img2.jpg';
import Image2 from './img3.jpg';



export default function First(){
    return(
    <div className='container'>
            {/* <div className=" mt-4 text-primary">
                <div className="col-lg-12 d-flex justify-content-end"> */}
            <div className="row col-lg-12 text-center text-primary justify-content-end">
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-2">
                    <h6>Home</h6>
                </div>
                <div className="col-lg-2">
                    <h6>About</h6>
                </div>
                <div className="col-lg-2">
                    <h6>Our Services</h6>
                </div>
                <div className="col-lg-2">
                    <h6>Our Portfolio</h6>
                </div>
                <div className="col-lg-2">
                    <h6>Contact us</h6>
                </div>
            </div>
                    
                {/* <h6 className="ml-4">Home</h6>
                <h6 className="ml-4">About us</h6>
                <h6 className="ml-4">Our services</h6>
                <h6 className="ml-4">Our Portfolio</h6>
                <h6 className="ml-4">Contact us</h6>
                </div>
            </div> */}

        <div className='carousal'>
            <div className="col-lg-12">
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={Image} alt="image"/>
                <Carousel.Caption className='caption'>
                    <h3 className="text-white">Game Development</h3>
                    <p className="text-white">Simply speaking, Game Development is the overall process of creating a video game. And if you thought 
                    that making a video game is as easy as playing one, well it’s not!!!</p>
                    <button className='butpage1 bg-warning text-primary'>GET STARTED</button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100 " src={Image1} alt="image"/>
                <Carousel.Caption className='caption'>
                    <h3 className="text-white">Game Development</h3>
                    <p className="text-white">There are many people who assume that if they are good Game Players then they will definitely 
                    be good in Game Development. Well, don’t make that mistake!!!</p>
                    <button className='butpage1 bg-warning text-primary'>GET STARTED</button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={Image2} alt="image"/>
                <Carousel.Caption className='caption'>
                    <h3 className="text-white">Game Development</h3>
                    <p className="text-white">Everything has a story and that is equally true for video games!!! Your story can have a linear structure which
                     is relatively easy, or it can even have a non-linear structure with various plot changes according to character actions.</p>
                    <button className='butpage1 bg-warning text-primary'>GET STARTED</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
        </div>

    </div>
    )
}