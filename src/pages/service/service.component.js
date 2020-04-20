import React from 'react';
import './service.styles.scss';
import {useParams} from "react-router-dom";
import Question from "../../components/question/question.component";
import service_list from "../../services-list";
import Slider from "react-slick";
import Arrow from "../../components/arrows/arrow.component";
import BeforeAfter from "../../components/custom-slides/before-after/before-after";

const settings = {
    className: "slider",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow side={"right"}/>,
    prevArrow: <Arrow side={"left"}/>
};



class Service extends React.Component {
    state= {
        title:"",
        cover: "",
        short_descrp: "",
        used_for: "",
        description: "",
        additional: "",
        pictures: "",
        recovery: "",
        course:"",
        effect_length:"",
        price:"",
        priceArea: []
    };


    componentDidMount() {
        let {serviceId} = useParams();

        //firebase....

    }


    render() {

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

 }
};




export default Service;