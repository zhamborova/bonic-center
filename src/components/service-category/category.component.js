import Slider from "react-slick/lib";
import React from "react";
import Arrow from "../arrows/arrow.component";
import './category.styles.scss'
import ServiceSlide from "../custom-slides/service-slide/service-slide.component";
import service_short_list from "../../service-short-list";

 const Category = ({services,url}) => {
     const settings = {
         infinite: true,
         speed: 500,
         slidesToShow: 3,
         slidesToScroll: 1,
         nextArrow: <Arrow side={"right"}/>,
         prevArrow: <Arrow side={"left"}/>
     };
    return <div className="category">
         <span className='category-1'>Категория 1</span>
         <Slider {...settings}>
             {Object.keys(services).map((key,index)=>{
                return <ServiceSlide index={index} service={service_short_list[url][key]} url={url}/>
             })}
         </Slider>
     </div>
 };



export default Category;