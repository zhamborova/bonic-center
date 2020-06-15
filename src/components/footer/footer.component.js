import React from 'react';
import './footer.styles.scss';
import {ReactComponent as Location} from '../../assets/location.svg'
import {ReactComponent as Phone } from '../../assets/phone.svg';
import {ReactComponent as Clock } from '../../assets/clock.svg';
import ContactForm from "../contact-form/contact-form.component";
import map from '../../assets/map.png'


const Footer = ({isHome}) => {
    let contact_info = `contact-info ${isHome ? `` : `modified-info`}`;
    let img = `img ${isHome ? `` : `modified-img`}`
    let footer = `footer ${isHome ? `` : `modified-footer`}`
  return (
      <div className={footer} >
           <div className={img} style={{backgroundImage: `url(${map})`}} >
               {isHome ?
                   <React.Fragment>
                   <div className='contact'>
                   <h2>Есть вопросы?</h2>
                   <h2>Отправьте нам сообщение!</h2>
               </div>
               <ContactForm/>
                   </React.Fragment> : null}
           </div>
        <div className={contact_info}>
            <span className='contacty'>Контакты</span>
            <div> <p><strong>Телефон</strong></p>
                <p> +7 (967) 424-21-01</p></div>
            <div><p><strong>Адрес</strong></p>
                <p>Пушкина 6, Нальчик, КБР, 360051</p></div>
            <div><p><strong>Часы работы</strong></p>
             <p>Пн-Вс: 09:00-19:00</p></div>

        </div>


      </div>


  )


};


export default Footer;
