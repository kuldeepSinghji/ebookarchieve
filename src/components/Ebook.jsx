import React from 'react'
import Books from './Books'
import NavBook from './NavBook'
import Sidebar from './Sidebar'
import "./ebook.css"
function Ebook() {
    return (
        <>
         <NavBook/>   
         <div className="MainSectionContainer">
         <Sidebar/>
         <Books/> 
         </div>
        </>
    )
}

export default Ebook
