import Slider from "react-slick/lib";
import React from "react";
import Arrow from "../arrows/arrow.component";
import './category.styles.scss'
import ServiceSlide from "../custom-slides/service-slide/service-slide.component";

 const Category = ({services,url}) => {

     const settings = {
         infinite: true,
         speed: 500,
         slidesToShow: 3,
         slidesToScroll: 1,
         nextArrow: <Arrow side={"right"}/>,
         prevArrow: <Arrow side={"left"}/>,
         responsive: [
             {
                 breakpoint: 700,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2,
                 }
             }]
     };
    return <div className="category">

         <Slider {...settings}>
             {Object.keys(services).map((key,index)=>{
                return <ServiceSlide key={key} index={index} service={services[key]}/>
             })}
         </Slider>
     </div>
 };



export default Category;