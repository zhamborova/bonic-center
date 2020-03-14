import React from 'react';
import './service.styles.scss';
import {useParams} from "react-router-dom";


const info = {
  title: "",
  short: "",
  purpose: "",
  pics: [[],[]],
  procedure: "",
  faq: [[],[]],



};

const Service = (props) => {

    console.log(props)
    let {serviceId} = useParams();
    console.log(serviceId)
  return (<div>{serviceId}</div>)


};

export default Service;