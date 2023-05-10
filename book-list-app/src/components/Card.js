import React from "react";
import book from "../images/book.jpg"


const Card = (props) => {

    return (
        <>
        <div className="card" >
            <img src={book} alt="" />
            <div className="bottom">
                <h3 className="title">Reactjs Course Book</h3>
                <p className="amount">60 &#8378;</p>
            </div>
        </div>
          
        </>
    )
}

export default Card;