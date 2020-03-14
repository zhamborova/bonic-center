import React from 'react';
import './footer.styles.scss';
import {ReactComponent as Location} from '../../assets/location.svg'
import {ReactComponent as Phone } from '../../assets/phone.svg';
import {ReactComponent as Clock } from '../../assets/clock.svg';



const Footer = () => {
  return (
      <div className='footer'>

          <div className='map'>
              <div className="mapouter">
                  <div className="gmap_canvas">
                      <iframe
                          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad90a3cc95a89b635f85aa086ee368c6228e6c95507c37d4805370325f594e323&amp;source=constructor"
                          width="320" height="340" frameBorder="0"/>
                  </div>
              </div>
          </div>


          <div className='contact'>
              <h2> Контакты</h2>
              <p> <Location/> Пушкина, 6, Нальчик, Кабардино-Балкарская Респ., 360051</p>
              <p> <Phone/> +7 967 424-21-01</p>
              <p> <Clock/>  09:00am - 07:00pm every day</p>


         </div>


      </div>


  )


};


export default Footer;
