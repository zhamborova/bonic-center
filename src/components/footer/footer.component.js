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
                      <iframe width="300" height="320" frameBorder="0" style={{border: "0"}}
    src="https://www.google.com/maps/embed/v1/place?q=nalchik%20centr%20lazernoy%20cosmetology%20bonic&key=AIzaSyDp8gS2I1Zv-HlNPHrl0fXJlay1Q7pufno"
    allowFullScreen/>
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
