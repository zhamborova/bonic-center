import React from 'react';
import './service.styles.scss';
import Question from "../../components/question/question.component";
import service_list from "../../services-list";
import Slider from "react-slick";
import Arrow from "../../components/arrows/arrow.component";
import BeforeAfter from "../../components/custom-slides/before-after/before-after";
import Footer from "../../components/footer/footer.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import ProcedureFormat from "../../components/procedure-format/procedure-format";
import pics from "../../pics_before_after";

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
        pictures: [],
        recovery: "",
        course:"",
        effect_length:"",
        price:"",
        priceArea: [],

    };


    componentDidMount() {
       let {serviceId} = this.props.match.params;
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
                        price,description,used_for, additional, priceArea,pictures} = result;
                this.setState({cover,title, recovery, effect_length, course,
                    price,description,used_for, additional,priceArea,pictures})
                })



    }


    render() {
        console.log(this.state.pics)
        let {serviceId} = this.props.match.params;

        const {title, recovery, effect_length, course,
            price,description,used_for, additional, priceArea, pictures} = this.state;

        return !title ? <WithSpinner/> :
        <div className='service'>
         <div className='service__info-section'>
             <div className='info-section__cover-img' />
             <div className="info-section__details">
                 <span className='details__title'>{title}</span>
                 <span className='details__attributes'>Период восстановления</span>
                 <p>{!recovery ? "Отсутствует" : recovery}</p>
                 <span className='details__attributes'>Длительность эффекта</span>
                 <p>{effect_length}</p>
                 <span className='details__attributes'> Курс</span>
                 <p>{course}</p>

                 {!price ?
                      null:
                     <React.Fragment>
                     <span className='details__attributes'>Цена</span>
                         <p>{price}</p></React.Fragment>

                 }

             </div>
         </div>

            {serviceId == 'laser_gynecology' ? null:
                <div className='service__slider-section'>
             <Slider {...settings}>
                 {pictures.map((pic,index) => {
                  return <BeforeAfter key={index} index={index} before={pic["before"]} after={pic['after']}/>
                 })}
             </Slider>
         </div>}
         <div className='service__qa-section'>
             {
                 !price ? <Question question={'Цена'} >
                     <ProcedureFormat text={priceArea} type="price"/>
                 </Question> : null
             }
             <Question question={'Показания'} >
                 <ProcedureFormat text={used_for} type="used_for" /></Question>
             <Question question={'Описание процедуры'} >
                 <ProcedureFormat text={description} type="description" />
             </Question>
             <Question question={'Дополнительная информация'} >
                 <ProcedureFormat text={additional} type="description"/>
             </Question>
         </div>


        <Footer isHome={false}/>
     </div>}


};




export default Service;
