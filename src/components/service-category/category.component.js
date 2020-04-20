import Slider from "react-slick/lib";
import React from "react";
import Arrow from "../arrows/arrow.component";
import './category.styles.scss'
import ServiceSlide from "../custom-slides/service-slide/service-slide.component";


 const Category = ({services}) => {
     const settings = {
         infinite: true,
         speed: 500,
         slidesToShow: 3,
         slidesToScroll: 1,
         nextArrow: <Arrow side={"right"}/>,
         prevArrow: <Arrow side={"left"}/>
     };
     {/*map over services*/}
    return <div className="category">
         <span className='category-1'>Категория 1</span>
         <Slider {...settings}>
             <ServiceSlide index={1}/>
             <ServiceSlide index={2}/>
             <ServiceSlide index={3}/>
             <ServiceSlide index={4}/>
         </Slider>
     </div>
 };



export default Category;