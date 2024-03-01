import React from 'react';
import './home.styles.scss';
import Footer from "../../components/footer/footer.component.js";
import { articles } from "../../constants.js";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__articles'>
                {articles.map((article, index) => (
                    <Link to={`/services/${article.url}`} key={index} className={article.className}>
                        <div>
                            <img src={article.img} alt={article.text}/>
                            <p>{article.text}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <Footer isHome />
        </div>
    );
};

export default Home;
