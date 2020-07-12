import React from 'react';
import "./procedure-format.scss";

const ProcedureFormat = ({type, text}) => {
    const formatPrice = () =>{
     let areas = text[0].hasOwnProperty("woman");
        return(
            <table>
                <tbody>
            <tr>
                <th>Зона</th>
                <th>Цена</th>
                { areas ?
                <React.Fragment>
                <th>Ж</th>
                <th>М</th>
                </React.Fragment> : null}
            </tr>
                { text.map((service) => (
                  service["price"]  ?
                  <tr key={service["area"]}>
                    <td>{service["area"]}</td>
                    <td>{service["price"]}</td>
                      { areas? <React.Fragment>
                    <td>-</td>
                    <td>-</td>
                    </React.Fragment> : null}
                </tr> :
                      <tr key={service["area"]}>
                          <td>{service["area"]}</td>
                          <td>-</td>
                          <td>{service["woman"]}</td>
                          <td>{service["man"]}</td>
                      </tr>

                ))}
            </tbody></table>)

    }
    const formatDescription = () =>{

        return text.split("br").map((item, i) => <p key={i}>{item}</p>);
    };

    const formatList = () =>{
        return text.map((point, index) => (
            <li key={index}>{point}</li>
        ))
    };



    const formatType = () =>{
            switch(type){
            case "price": return formatPrice();
            case "description": return formatDescription();
            case "used_for": return formatList();
                default : return null;

        }


    }

    return formatType();

}

export default ProcedureFormat;