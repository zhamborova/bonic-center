import React from 'react';
import './carousel.styles.css';
import Carousel from "react-bootstrap/Carousel";

const CarouselCustom = ({images}) => {

    return(
        <div className='carousel-container'>
        <Carousel interval = {3000} controls={false}>
            {images.map(img=> {
               return <Carousel.Item>
                    <img src={img}
                     className='d-block w-100'/>
                </Carousel.Item>
            })}

        </Carousel>
        </div>
    )
};

export default CarouselCustom;
