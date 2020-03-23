import React from 'react';
import './service.styles.scss';
import {useParams} from "react-router-dom";
import Question from "../../components/question/question.component";
import cover from '../../assets/cover.PNG'
import service_list from "../../services-list";




const Service = (props) => {
let {serviceId} = useParams();
console.log(service_list);
const {cover,title, recovery, effect_length, course, price,description} = service_list['laser_resurficing'];

  return (<div className='service-container'>

         <div className="test">
         <div>
          <div className='imgs-container'>
          </div>
          <img src={cover}/>
        </div>

      <div className="basic-info">
          <h1>{title}</h1>
          <strong> Период восстановления</strong>
          <p>{recovery}</p>
          <strong> Длительность эффекта</strong>
          <p>{effect_length}</p>
          <strong> Курс</strong>
          <p>{course}</p>
          <strong> Цена </strong>
          <p>{price}</p>
      </div>
         </div>

      <div className="qa">
          <Question question={'Показание'} answer={description}/>
          <Question question={'Описание'} answer={description}/>
      </div>



  </div>)


};

export default Service;