import React from 'react';
import './services.styles.scss';
import banner from '../../assets/banner.png'
import Slider from "react-slick";
import Category from "../../components/service-category/category.component";

const Services = () =>{


  return (<div className='services-container'>
          <div className='service-banner' style={{backgroundImage: `url(${banner})`}}>

              <div className="service-btn"> <span>Услуги</span></div>
          </div>


          <Category />

          <Category />

          <Category />

  </div>
)
};



export default Services;