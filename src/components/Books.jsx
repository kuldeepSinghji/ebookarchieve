import React, { useContext } from 'react'
import Book from './Book'
import "./books.css"
import BookContext from './Context/context'
import Spinner from './Spinner'

export default function Books() {
    const {books,booksDetails,loading} = useContext(BookContext)
    console.log(loading,"loading")
    console.log(booksDetails,"kuldeep")
    // console.log(books)
    return (
        <>
        <div className="bookMainContainer">
            <div className="bookContainer">
            <div className="bookHeading">
                <h1>BOOK SHELF</h1> 
            </div>
            </div>
            {loading && <Spinner/>}
                <div className="allBookField">
                   {!loading && booksDetails.map((element)=>{
                       return(
                        <Book key={element.id} element = {element}/>
                       )
                   })

                   } 
                </div>
        </div>   
        </>
    )
}
