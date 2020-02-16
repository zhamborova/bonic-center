import React from 'react';
import './service-preview.styles.css';
import Service from "../service/service.component";
import services from "./service-list";

const ServicePreview = () => {
  return (
       <div className='service-preview-wrapper'>
           <h1>Treatments</h1>
         <div className='service-preview'>
          {services.map(service=>(<Service {...service}/>))}
      </div>
       </div>
  )
};

export default ServicePreview;