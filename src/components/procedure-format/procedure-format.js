import React from "react";
import "./procedure-text.scss";
const ProcedureFormat = ({type, text}) => {
    console.log(text)
    const formatPrice = () =>{

        return(
            <table>
                <tbody>
            <tr>
                <th>Зона</th>
                <th>Цена</th>
                <th>Ж</th>
                <th>М</th>
            </tr>
                { text.map((price) => (
                  price["price"]  ?
                  <tr key={price["area"]}>
                    <td>{price["area"]}</td>
                    <td>{price["price"]}</td>
                    <td>-</td>
                    <td>-</td>
                </tr> :
                      <tr key={price["area"]}>
                          <td>{price["area"]}</td>
                          <td>-</td>
                          <td>{price["woman"]}</td>
                          <td>{price["man"]}</td>
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