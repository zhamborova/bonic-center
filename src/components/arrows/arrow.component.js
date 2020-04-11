import right from "../../assets/right.svg";
import left from "../../assets/left.svg";
import React from "react";
import './arrow.styles.scss'
function Arrow(props) {
    const { className, style, onClick, side } = props;
    return (
        <img src={ side === "right" ? right : left}
             className={className}
             style={{ ...style, display: "block" }}
             onClick={onClick}
        />
    );
}

export default Arrow;