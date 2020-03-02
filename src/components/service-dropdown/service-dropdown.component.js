import React from 'react';
import './service-dropdown.styles.scss';

const ServiceDropDown = ({serviceItems}) => (
    <div className='service-dropdown'>
        <div className='service-items' >
            {serviceItems.map(item=>(
                <div className='service-item-container'>

                    <div className='img-container'> <img src={item.imgUrl}/></div>
                <span>{item.text}</span>
                </div>))}
        </div>
    </div>
);



export default ServiceDropDown;