import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="card_main">
                <img src={props.imgsrc} className="card_img" />
                <a href="#"><button className="list_btn">{props.btnname}</button></a>
            </div>
        </>
    );
};
export default Card;