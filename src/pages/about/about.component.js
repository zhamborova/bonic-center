import React from 'react';
import about from '../../assets/about.png';
import './about.styles.scss'
import CustomButton from "../../components/custom-button/custom-button.component";
import Slider from "react-slick/lib";
import Arrow from "../../components/arrows/arrow.component";
import Doctor from "../../components/custom-slides/doctors/doctor.component";


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
        prevArrow: <Arrow side={"left"}/>
    };

    componentDidMount() {
        //request doctors from firebase
    }


    render() {
    return (
        <div className='about-container'>
            <div className='history-container'>
                <img src={about}/>

                <div className='history'>
                    <span className='about-us'> О нас</span>
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
                <Slider {...this.settings}>

                    {/*TO DO--------------------map over this.doctors*/}
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
     }

};
export default About;



