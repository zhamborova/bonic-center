import React from 'react';
import './info-section.styles.scss';

const InfoSection = ({image, description, side}) => {
    return (

       <div className='wrap-info'>
           <h1> Что Мы Предлагаем</h1>
        <div className={`info-section-container ${side ?` row-reverse`: ``}`}>
         <div className='info-description'>
             {description}
         </div>
          <img src={image} />
        </div>
       </div>

    )



};

export default InfoSection;