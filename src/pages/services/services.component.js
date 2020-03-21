import React from 'react';
import './services.styles.scss';
import Preview from "../../components/preview/preview.component";


const Services = () =>{


  return (<div className='services-container'>

         <div className='previews-container'>
           <div className='little-intro'>
             <h2>Текст</h2>
             <span> Описание предлагаемых услуг, у меня нет вооброжения, еще немного текста для вида норм</span>
           </div>
        {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(()=>{
          return <Preview />
        })}
         </div>
  </div>
)
};

export default Services;