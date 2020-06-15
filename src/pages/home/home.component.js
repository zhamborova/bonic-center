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
                <div className="wrapper">

                    <div className="two">
                        <img src={"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/06/Female_Running_Dog_732x549-thumbnail-732x549.jpg?w=441"}/>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed odio magna. Nunc lacinia congue dui ac tincidunt.</p>
                    </div>
                    <div className="three">

                        <img src={"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/06/People_Hugging_732x549-thumbnail-732x549.jpg?w=1092"} />

                        <h2>   Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed odio magna. Nunc lacinia congue dui ac tincidunt. Aenean iaculis, nisl eget vestibulum feugiat, ligula nunc pulvinar velit, ut pharetra ipsum dolor eget nunc. Integer convallis orci ac tellus suscipit, ac ultrices sem pretium. Nunc at rutrum odio. Ut sit amet ipsum sit amet orci elementum viverra. Cras quis posuere diam.</p>
                    </div>
                    <div className="four">
                        <img src={"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/06/Face_Masks_Street_732x549-thumbnail-732x549.jpg?w=441"}/>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed odio magna. Nunc lacinia congue dui ac tincidunt.</p>

                    </div>
                    <div className="five">
                        <img src={"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/06/Beers_Masks_732x549-thumbnail-732x549.jpg?w=441"}/>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed odio magna. Nunc lacinia congue dui ac tincidunt.</p>

                    </div>

                </div>
            </div>
            <Footer isHome/>
        </div>
    )

};


export default Home;


