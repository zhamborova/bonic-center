import React from 'react';
import './home.styles.scss';
import CarouselCustom from "../../components/carousel/carouser.component";
import ServicePreview from "../../components/service-preview/service-preview.component";
import InfoSection from "../../components/info-section/info-section.component";
import Footer from "../../components/footer/footer.component";

const images =    ['https://aesteemclinic.sg/wp-content/uploads/2019/09/banner2.png',
                   'https://aesteemclinic.sg/wp-content/uploads/2019/09/banner1.png'];

const info = {
    image: 'https://as1.ftcdn.net/jpg/03/02/19/56/500_F_302195663_wmjHPDEp7p3oLhD5bomRhqpOP0bGPgIC.jpg',
    description: 'Наш центр предлагает широкий спектр процедур по омоложению и решению различных эстетических проблем кожи, удалению нежелательных волос. При работе с клиентами используется высококлассное оборудование от ведущих мировых производителей. Эффективность и безопасность использования такого оборудования подтверждается специальными клиническими исследованиями, ' +
        'а также результатами его использования в ведущих центрах лазерной косметологии Европы и Америки.'  +
        'В сочетании с техническими достижениями современности, ' +
        'наша медицинская система способна творить чудеса.\n' +
        'Приоритетом нашей работы является качество. Мы добиваемся долговременного результата, ' +
        'так как всегда стремимся превзойти ваши ожидания.' +
        ' Когда счастливы наши пациенты, счастливы и мы!'
};

const Home = () => {
    return (
        <div className='home-container'>
            <CarouselCustom images = {images}/>
            <InfoSection {...info}/>
            <ServicePreview/>

            <Footer />
        </div>
    )

};


export default Home;


