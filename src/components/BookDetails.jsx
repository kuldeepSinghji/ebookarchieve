import React, { useContext } from 'react'
import NavBook from './NavBook'
import "./bookDetails.css"
// import logo from "./logo.png"
import BookContext from './Context/context'
import { useLocation } from 'react-router-dom'
// import {Link} from "react-router-dom"
export default function BookDetails() {
        const {booksDetails,setBooksDetails} = useContext(BookContext)
        const location = useLocation();
        if(location.pathname === "/bookDetails/"){
            
        }
        console.log(booksDetails[0].name,"ram")
        
    return (
        <>
         <NavBook/>
         <div className="bookDetailsMainContainer">
             <div className="imgContainer">
                 <div className="imgBox">
                     <img src={booksDetails[0].img} alt="img" />
                 </div>
                 <div className="downloadBox">
                   {/* <a href={booksDetails[0].bookfile}><button>DOWNLOAD</button></a>  */}
                   <a href='/'><button>DOWNLOAD</button></a> 
                 </div>
             </div>
             <div className="bookDetailsContainer">
             <div className="bookNameBox">
                 <h1>{booksDetails[0].name}</h1>
             </div>
             <div className="authorNameBox">
                 <p>Category:{booksDetails[0].category}</p>
             </div>
             <div className="descriptionBox">
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eligendi consectetur voluptate fugit iusto dolores ipsam atque explicabo, enim placeat dolorum cumque veritatis libero temporibus alias laudantium molestias? Sint omnis eligendi ex optio saepe odio error libero fugiat fuga id? Iste adipisci tempora tempore, repellat veniam est neque minus autem hic exercitationem accusamus dolores explicabo!</p>
             </div>
             <div className="categoryBox">
                 <p># {booksDetails[0].category}</p>
             </div>
             </div>
         </div>
        </>
    )
}
