import React from 'react';
import './services.styles.scss';
import Category from "../../components/service-category/category.component";
import uslugi from '../../assets/uslugi.jpg'
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import Footer from "../../components/footer/footer.component";

class Services extends React.Component{

    state= {
        services: null
    }



 async componentDidMount() {
         const requestOptions = {
             method: 'POST',
             headers: { 'Content-Type': 'application/json'},
             mode:"cors",
         };

    await fetch("  https://europe-west3-bonic-81df6.cloudfunctions.net/get-procedures-list",requestOptions)
         .then(res => res.json())
         .then(
             (services) => {
              this.setState({services})

             })


 }


    render(){
console.log(this.state)
      return this.state.services  ?
              <div className='services'>
          <div className='services__banner' style={{backgroundImage: `url(${uslugi}`}}>
              <div className="services__title"> <span>Процедуры</span></div>
          </div>
                   <React.Fragment>
                  <Category services={this.state.services['rejuvination']} name="Омоложение"/>
                  <Category services={this.state.services['problematic_skin']} name="Проблемная кожа"/>
                  <Category services={this.state.services['other']} name="Другое" />

                   </React.Fragment>
            <Footer isHome={false}/>
            </div>: <WithSpinner/>

    }
};



export default Services;
