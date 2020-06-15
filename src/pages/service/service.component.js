import React from 'react';
import './service.styles.scss';
import Question from "../../components/question/question.component";
import service_list from "../../services-list";
import Slider from "react-slick";
import Arrow from "../../components/arrows/arrow.component";
import BeforeAfter from "../../components/custom-slides/before-after/before-after";
import Footer from "../../components/footer/footer.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const settings = {
    className: "slider",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow side={"right"}/>,
    prevArrow: <Arrow side={"left"}/>
};



class Service extends React.Component {
    state = {
        title:null,
        cover: "",
        short_descrp: "",
        used_for: "",
        description: "",
        additional: "",
        pictures: "",
        recovery: "",
        course:"",
        effect_length:"",
        price:"",
        priceArea: []
    };


    componentDidMount() {
       let {serviceId} = this.props.match.params;
       console.log(serviceId)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            mode:"cors",

            body: JSON.stringify({ procedureId: serviceId})
        };

        fetch("https://europe-west3-bonic-81df6.cloudfunctions.net/get-procedure-by-id",requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                const {cover,title, recovery, effect_length, course,
                        price,description,used_for, additional} = result;
                console.log(result)
                this.setState({cover,title, recovery, effect_length, course,
                    price,description,used_for, additional})
                })


    }


    render() {
        let {category, serviceId} = this.props.match.params;
        const {cover} = service_list[category][serviceId];
        const {title, recovery, effect_length, course,
            price,description,used_for, additional} = this.state;

        return !title ? <WithSpinner/> :
        <div className='service-container'>
         <div className="service-1">
             <img className='cover-img' src={cover}/>
             <div className="basic-info">
                 <span className='title'>{title}</span>
                 <span className='attributes'>Период восстановления</span>
                 <p>{recovery}</p>
                 <span className='attributes'>Длительность эффекта</span>
                 <p>{effect_length}</p>
                 <span className='attributes'> Курс</span>
                 <p>{course}</p>
                 <span className='attributes'>Цена</span>
                 <p>{price}</p>
             </div>
         </div>

         <div className='slider-container'>
             <Slider {...settings}>
                 <BeforeAfter index={1}/>
                 <BeforeAfter index={2}/>
             </Slider>
         </div>
         <div className='qa'>
             <Question question={'Показания'} answer={used_for} used_for/>
             <Question question={'Описание процедуры'} answer={description} used_for={false}/>
             <Question question={'Дополнительная информация'} answer={additional} used_for={false}/>
         </div>


        <Footer isHome={false}/>
     </div>}


};




export default Service;