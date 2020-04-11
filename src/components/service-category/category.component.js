import Slider from "react-slick/lib";
import React from "react";
import Preview from "../preview/preview.component";
import Arrow from "../arrows/arrow.component";
import './category.styles.scss'
 const Category = () => {
     const settings = {
         infinite: true,
         speed: 500,
         slidesToShow: 3,
         slidesToScroll: 1,
         nextArrow: <Arrow side={"right"}/>,
         prevArrow: <Arrow side={"left"}/>
     };
    return <div className="category">
         <span className='category-1'>Категория 1</span>
         <Slider {...settings}>
             <CustomSlide index={1}/>
             <CustomSlide index={2}/>
             <CustomSlide index={3}/>
             <CustomSlide index={4}/>
         </Slider>
     </div>
 };
class CustomSlide extends React.Component {
    render() {
        const { index, ...props } = this.props;
        return (
            <div {...props}>
                <Preview />
            </div>
        );
    }
}


export default Category;