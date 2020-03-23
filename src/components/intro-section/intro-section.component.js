import React from 'react';
import './intro-section.styles.scss';
import {Link} from "react-router-dom";

const IntroSection = ({image}) => {
    return (

       <div className='wrap-info'>
         <img src={image} />
         <div className="description">
           <h1>Наши услуги</h1>
           <p>Наш центр предлагает широкий спектр процедур по омоложению и решению различных эстетических проблем кожи, удалению нежелательных волос.
               При работе с клиентами используется высококлассное оборудование от ведущих мировых производителей. </p>
           <p>Приоритетом нашей работы является качество. Мы добиваемся долговременного результата,
               так как всегда стремимся превзойти ваши ожидания.
                Когда счастливы наши пациенты, счастливы и мы!</p>

             <Link to='/services'>Все процедуры</Link>
         </div>

       </div>

    )



};

export default IntroSection;