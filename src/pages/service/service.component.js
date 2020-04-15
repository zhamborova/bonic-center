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
const {cover,title, recovery, effect_length, course, price,description,used_for, additional} = service_list['laser_resurficing'];

  return (<div className='service-container'>

         <div className="service-1">

          <img className='cover-img' src={cover}/>


      <div className="basic-info">
          <span className='title'>{title}</span>
           <span className='attributes'>Период восстановления</span>
          <p>{recovery}</p>
              <span className='attributes'>Длительность эффекта</span>
          <p>{effect_length}</p>
             <span className='attributes'> Курс</span>
          <p>{course}</p>
              <span className='attributes'>Цена</span>
          <p>{price}</p>
      </div>
         </div>


 <div className='slider-container'>
    <Slider {...settings}>
        <BeforeAfter index={1}/>
        <BeforeAfter index={2}/>
    </Slider>
 </div>


   <div className='qa'>
       <Question question={'ПОКАЗАНИЯ'} answer={used_for}/>
       <Question question={'ОПИСАНИЕ ПРОЦЕДУРЫ'} answer={description}/>
       <Question question={'ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ'} answer={additional}/>
   </div>

  </div>)


};


class BeforeAfter extends React.Component {
    render() {
        return (
            <div {...this.props}>
                <div className='before-after'>
                    <label htmlFor={'before'}>До</label>
                    <label htmlFor={'after'}>После</label>
                    <img id='before'src={before} />
                    <img id='after' src={after}/>
                </div>
            </div>
        );
    }
}

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