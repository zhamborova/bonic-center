import React from 'react';
import './home.styles.scss';
import Footer from "../../components/footer/footer.component";


const Home = () => {
    return (
        <div className='home-container'>


                <div className="wrapper">

                    <div className="two">
                        <img src={"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/06/Female_Running_Dog_732x549-thumbnail-732x549.jpg?w=441"}/>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed odio magna. Nunc lacinia congue dui ac tincidunt.</p>
                    </div>
                    <div className="three">
                        <img src={"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/06/Face_Masks_Street_732x549-thumbnail-732x549.jpg?w=441"}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed odio magna. Nunc lacinia congue dui ac tincidunt.</p>

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
            <Footer isHome/>
        </div>
    )

};


export default Home;


