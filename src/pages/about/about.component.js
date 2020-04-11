import React from 'react';
import about from '../../assets/about.png';
import './about.styles.scss'
import CustomButton from "../../components/custom-button/custom-button.component";
import Slider from "react-slick/lib";
import Arrow from "../../components/arrows/arrow.component";
const About = () => {

    return (
        <div className='about-container'>
            <div className='history-container'>
                <img src={about}/>

                <div className='history'>
                    <span className='about-us'> О Нас</span>
                    <p>Центр лазерной косметологии Bonic – это клиника с великолепным сервисом и уютной атмосферой.
                        Для нас каждый человек – это шедевр природы, состоящий из души и тела, обладающий
                        особой уникальностью и неповторимостью. Мы любим свою работу и считаем ее искусством!
                        Мы нацелены на качественный
                        результат и партнерские взаимоотношения со своими клиентами, и поэтому нам доверяют и нас
                        рекомендуют.</p>
                    <CustomButton text={'Наши услуги'}  />
                </div>

                </div>

            <div className='doctor-container'>
                <span >Наши Специалитсы</span>

                <div className='doctor-slide-container'>
                <Slider {...settings}>
                    <Doctor index={1} name='Жамборов Заур Хасанбиевич'/>
                    <Doctor index={2} name='Шевлокова Джамиля Валентиновна'/>
                    <Doctor index={3} name='Тарабрина Татьяна Викторовна'/>
                    <Doctor index={4} name='Мамхегова Дана Замирбековна'/>
                    <Doctor index={5} name='Тарабрина Татьяна Викторовна'/>
                    <Doctor index={6} name='Мамхегова Дана Замирбековна'/>
                </Slider>
                </div>





            </div>
        </div>
    )

};

export default About;

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Arrow side={"right"}/>,
    prevArrow: <Arrow side={"left"}/>
};

const Doctor = (props) => {

  return (
      <div  {...props}>
      <div className='doctor-slide'>
      <div className='fill'/>

      <span id='doc-name'>{props.name}</span>
      </div>

      </div>

  )


};