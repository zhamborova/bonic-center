import React from 'react';
import './footer.styles.scss';
import {ReactComponent as Location} from '../../assets/location.svg'
import {ReactComponent as Phone } from '../../assets/phone.svg';
import {ReactComponent as Clock } from '../../assets/clock.svg';
import ContactForm from "../contact-form/contact-form.component";
import map from '../../assets/map.png'


const Footer = ({isHome}) => {
    let footer = `footer ${isHome ? `` : ` footer--v2`}`;
    let contact_info = `footer__contact-info ${isHome ? `` : ` footer--v2__contact-info--v2`}`;
    let img = `footer__back-section ${isHome ? `` : ` footer--v2__back-section--v2`}`
  return (
      <div className={footer} >
           <div className={img} style={{backgroundImage: `url(${map})`}} >
               {isHome ?
                   <React.Fragment>
                   <div className='back-section__message-us'>
                   <h2>Есть вопросы?</h2>
                   <h2>Отправьте нам сообщение!</h2>
               </div>
               <ContactForm/>
                   </React.Fragment> : null}
           </div>
        <div className={contact_info}>
            <span className='contact-info__contacts'>Контакты</span>
            <div> <p><strong>Телефон</strong></p>
                <p> +7 (967) 424-21-01</p></div>
            <div><p><strong>Адрес</strong></p>
                <p>Шогенцукова 5, Нальчик, КБР, 360051</p></div>
            <div><p><strong>Часы работы</strong></p>
             <p>Пн-Вс: 09:00-19:00</p></div>

        </div>


      </div>


  )


};


export default Footer;
