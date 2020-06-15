import React from 'react';
import './services.styles.scss';
import banner from '../../assets/banner.png'
import Category from "../../components/service-category/category.component";
import service_short_list from "../../service-short-list";
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
                 //console.log(result)

             })


 }


    render(){

      return this.state.services  ?
              <div className='services-container'>
          <div className='service-banner' style={{backgroundImage: `url(${banner})`}}>
              <div className="service-btn"> <span>Процедуры</span></div>
          </div>
                   <React.Fragment>
                  <Category services={this.state.services['one']} url={'one'}/>
                  <Category services={this.state.services['one']} url={'one'} />
                  <Category services={this.state.services['one']} url={'one'} />
                   </React.Fragment>
            <Footer isHome={false}/>
            </div>: <WithSpinner/>

    }
};



export default Services;