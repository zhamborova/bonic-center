import React from 'react';
import './footer.styles.scss';
import {ReactComponent as Location} from '../../assets/location.svg'
import {ReactComponent as Phone } from '../../assets/phone.svg';
import {ReactComponent as Clock } from '../../assets/clock.svg';
import ContactForm from "../contact-form/contact-form.component";
import map from '../../assets/map.jpg'


const Footer = () => {
  return (

      <div className='footer' style={{backgroundImage: `url(${map})`, backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'}}>
              <div className='contact'>
                  <h2> Контакты</h2>
                  <p> <Location/> Пушкина, 6, Нальчик, КBR, 360051</p>
                  <p> <Phone/> +7 967 424-21-01</p>
                  <p> <Clock/>  09:00am - 07:00pm every day</p>
              </div>

           <ContactForm />


      </div>


  )


};


export default Footer;
