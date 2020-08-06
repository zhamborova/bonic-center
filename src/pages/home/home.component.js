import React from 'react';
import './home.styles.scss';
import Footer from "../../components/footer/footer.component";
import {articles} from "../../constants";

const Home = () => {
    return (
        <div className='home'>
            <div className='home__articles'>
            { articles.map(article => {
                console.log(article)
                return <a href={`/services/${article['url']}`} className={article['className']}>
                    <div key={article['className']} className={article['className']} >
                    <img src={article['img']}/>
                    <p>{article['text']}</p>
                </div> </a>
                })}
            </div>
            <Footer isHome/>
        </div>
    )

};


export default Home;


