import React from 'react';
import './services.styles.scss';
import banner from '../../assets/banner.png'
import Category from "../../components/service-category/category.component";
import service_list from "../../services-list";

const Services = () =>{

  return (<div className='services-container'>
          <div className='service-banner' style={{backgroundImage: `url(${banner})`}}>
              <div className="service-btn"> <span>Процедуры</span></div>
          </div>
          <Category services={service_list['one']} url={'one'} />
          <Category  services= {service_list['two']} url={'two'}/>
          <Category services={service_list['one']} url={'one'}/>

  </div>
)
};



export default Services;