import React, { useContext } from 'react'
import "./book.css"
// import img from "./logo.png"
import { Link } from 'react-router-dom';
import BookContext from './Context/context';

export default function Book(props) {
    const {viewClick} = useContext(BookContext);
    const {id,img,description,name,screenshot} = props.element;
    
    return ( 
        <>
        <div className="bookCardContainer">
            <div className="bookImgBox">
                <img src={img} alt="" />
            </div>
            <div className="bookCardName"> 
                <p>{name}</p>
            </div>
            <div className="bookCardButton">
                <Link to={"/bookDetails/"}><button onClick={()=>viewClick(id)}>VIEW</button></Link>
            </div>
        </div>   
        </>
    )
}
