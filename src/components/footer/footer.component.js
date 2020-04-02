import React from 'react';
import './footer.styles.scss';
import {ReactComponent as Location} from '../../assets/location.svg'
import {ReactComponent as Phone } from '../../assets/phone.svg';
import {ReactComponent as Clock } from '../../assets/clock.svg';
import ContactForm from "../contact-form/contact-form.component";
import map from '../../assets/map.png'


const Footer = () => {
  return (

      <div className='footer' >

              <div className='contact'>
                  <h2>Есть вопросы?</h2>
                  <h2>Отправьте нам сообщение!</h2>
              </div>

          <ContactForm/>
           <div className='img' style={{backgroundImage: `url(${map})`, backgroundPosition: 'center',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat'}} />
        <div className='blue'>
            <div> <p>Телефон</p>
                <p> +7 (967) 424-21-01</p></div>
            <div><p>Адрес</p>
                <p>Пушкина 6, Нальчик, КБР, 360051</p></div>
            <div><p>Часы работы</p>
             <p>Пн-Вс: 09:00-19:00</p></div>

        </div>


      </div>


  )


};


export default Footer;
