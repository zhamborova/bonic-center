import React from 'react';
import './service.styles.scss';
import {useParams} from "react-router-dom";
import Question from "../../components/question/question.component";
import service_list from "../../services-list";
import Slider from "react-slick";
import before from '../../assets/before.PNG'
import after from '../../assets/after.PNG'
import right from '../../assets/right.svg'
import left from '../../assets/left.svg'
import Arrow from "../../components/arrows/arrow.component";

const Service = (props) => {
let {serviceId} = useParams();
console.log(service_list);
const {cover,title, recovery, effect_length, course, price,description} = service_list['laser_resurficing'];

  return (<div className='service-container'>

         <div className="test">
         <div>
          <div className='imgs-container'>
          </div>
          <img className='cover-img' src={cover}/>
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


              <Question question={'Показание'} answer={description}/>
              <Question question={'Описание'} answer={description}/>


      </div>
         </div>


 <div className='slider-container'>
    <Slider {...settings}>

        <div className='before-after'>
            <label htmlFor={'before'}>До</label>
            <label htmlFor={'after'}>После</label>
            <img id='before'src={before} />
            <img id='after' src={after}/>
        </div>
        <div className='before-after'>
            <label htmlFor={'before'}>До</label>
            <label htmlFor={'after'}>После</label>
            <img id='before'src={before} />
            <img id='after' src={after}/>
        </div>
    </Slider>
 </div>
  </div>)


};

var settings = {
    className: "slider",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow side={"right"}/>,
    prevArrow: <Arrow side={"left"}/>
};




export default Service;