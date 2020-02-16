import React from 'react';
import './home.styles.css';
import CarouselCustom from "../../components/carousel/carouser.component";
import InfoSection from "../../components/info-section/info-section.component";
import im3 from '../../assets/im3.png' ;
import im2 from '../../assets/im2.png' ;
import ServicePreview from "../../components/service-preview/service-preview";

const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi' +
    ' ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
    'voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
    ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ' +
    'mollit anim id est laborum.';

const Home = () => {
    return (
        <div className='home-container'>
            <CarouselCustom images = {
                [im2,im3]}/>
           <ServicePreview background='https://aesteemclinic.sg/wp-content/uploads/2019/09/eye_bag_removal.jpg'
                            title = 'Laser Removal'


           />
        </div>
    )

};


export default Home;


