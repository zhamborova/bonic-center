import React from 'react';
import about from '../../assets/about.jpg';

import './about.styles.scss'
import CustomButton from "../../components/custom-button/custom-button.component.js";
import Slider from "react-slick/lib";
import Arrow from "../../components/arrows/arrow.component.js";
import Doctor from "../../components/custom-slides/doctors/doctor.component.js";
import Footer from "../../components/footer/footer.component.js";
import {Link} from "react-router-dom";


class About extends React.Component{
    state={
        doctors:[]
   };

     settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <Arrow side={"right"}/>,
        prevArrow: <Arrow side={"left"}/>,
         responsive: [
             {
                 breakpoint: 700,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2,
                 }
             }]
    };

    render() {

        return (
        <div className='about'>
            <div className='about__description'>
                <img className="about__img" src={about}/>

                <div className='description__text'>
                    <span className='text__about-us'> О нас</span>
                    <p>Центр лазерной косметологии Bonic – это клиника с великолепным сервисом и уютной атмосферой.
                        Для нас каждый человек – это шедевр природы, состоящий из души и тела, обладающий
                        особой уникальностью и неповторимостью. Мы любим свою работу и считаем ее искусством!
                        Мы нацелены на качественный
                        результат и партнерские взаимоотношения со своими клиентами, и поэтому нам доверяют и нас
                        рекомендуют.</p>
                    <Link to={"/"} > <CustomButton text={'Наши услуги'} /> </Link>
                </div>
                </div>

            <div className='about__doctor-slider'>
                <span className='doctor-slider__title'>Наши Специалитсы</span>

                <div className='doctor-slider__slides'>
                <Slider {...this.settings}>
                    <Doctor index={1} name='Жамборов Заур Хасанбиевич'/>
                    <Doctor index={2} name='Шевлокова Джамиля Валентиновна'/>
                    <Doctor index={3} name='Абаева Зульфия Нузюровна'/>
                    <Doctor index={4} name='Мамхегова Дана Замирбековна'/>
                    <Doctor index={5} name='Каскулова Жанна Ахмедовна'/>

                </Slider>
                </div>

            </div>
          <Footer isHome={false}/>
        </div>
    )
     }

};
export default About;



