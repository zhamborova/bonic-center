import React from 'react';
import './home.styles.scss';
import Footer from "../../components/footer/footer.component";
import intro from '../../assets/intro.png'
import {Link} from "react-router-dom";
import CustomButton from "../../components/custom-button/custom-button.component";


const Home = () => {
    return (
        <div className='home-container'>

            <div className='intro-info'>
                <img src={intro} />
                <div className="description">
                    <h1>Наши услуги</h1>
                    <p>Наш центр предлагает широкий спектр процедур по омоложению и решению различных эстетических проблем кожи, удалению нежелательных волос.
                        При работе с клиентами используется высококлассное оборудование от ведущих мировых производителей. </p>
                    <p>Приоритетом нашей работы является качество. Мы добиваемся долговременного результата,
                        так как всегда стремимся превзойти ваши ожидания.
                        Когда счастливы наши пациенты, счастливы и мы!</p>
                    <Link to='/services'><CustomButton text='Все процедуры'/></Link>
                </div>
            </div>
            <Footer />

        </div>
    )

};


export default Home;


