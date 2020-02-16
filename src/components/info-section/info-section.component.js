import React from 'react';
import './info-section.styles.css';

const InfoSection = ({image, description, side}) => {
    return (
        <div className={`info-section-container ${side ?` row-reverse`: ``}`}>
         <div className='info-description'>
             {description}
         </div>
          <div>
          <img src={image} />
          </div>

        </div>


    )



};

export default InfoSection;