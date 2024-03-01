import React from 'react';
import './services.styles.scss';
import Category from "../../components/service-category/category.component.js";
import uslugi from '../../assets/uslugi.jpg'
import WithSpinner from "../../components/with-spinner/with-spinner.component.js";
import Footer from "../../components/footer/footer.component.js";
import service_short_list from "../../service-short-list.js";
class Services extends React.Component{

    state= {
        services: null
    }



 async componentDidMount() {
         this.setState({ services: service_short_list });
 }


    render(){
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
