import React, { useContext, useEffect, useState } from 'react'
import BookContext from './Context/context'
import "./sidebar.css"

export default function Sidebar() {
    const {books,filterButton,booksDetails} = useContext(BookContext)
    const [filterBook, setFilterBook] = useState([])
    const fetchData = async()=>{
        // let booksURL = "http://shadowvj.pythonanywhere.com/api/resourceDatas/"
        // let data = await fetch(booksURL)
        // let parsedata = await data.json();
        setFilterBook(books)
    }
    useEffect(() => {
        fetchData();
    }, [])
    // console.log(a,"fetchdata")
    const uniqueBooks = [...new Set(filterBook.map((element)=>{
        return element.category;
    })),"All"]
    console.log(booksDetails,"details")

    // console.log(uniqueBooks)
    
    return (
        <>
        <div className="sideBarMain"> 
        <div className="sideBarContainer">
            <div className="headingDiv">
                <h3>BY CATEGORY :-</h3> 
            </div>
            <div className="categoryContainer">
                    {uniqueBooks.map((element)=>{
                        return(
                        <div key={element} className="category">
                        <button onClick={()=>filterButton(element)}>{element}</button>
                        </div>
                        )
                    })}
                
            </div>
        </div>  
        </div> 
        </>
    )
}
