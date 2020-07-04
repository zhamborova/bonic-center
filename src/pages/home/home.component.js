import React from 'react';
import './home.styles.scss';
import Footer from "../../components/footer/footer.component";
import {articles} from "../../constants";

const Home = () => {
    return (
        <div className='home'>
            { articles.map(article => {
                return <div key={article['className']} className={article['className']}>
                    <img src={article['img']}/>
                    <p>{article['text']}</p>
                </div>
                })}

            <Footer isHome/>
        </div>
    )

};


export default Home;


