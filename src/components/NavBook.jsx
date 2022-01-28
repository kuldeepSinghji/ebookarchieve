import React, { useContext, useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookContext from './Context/context'
import logout from "./logout.png"
import "./navBook.css"
import { useLocation } from 'react-router-dom'
export default function NavBook() {
    const {setBlogDetails,blogs,searchClick,fetchblogs,fetchbooks} = useContext(BookContext)
    const location = useLocation();
    
    return (  
        <>
        <nav className="nav">
            <div className="mainLogoContainer">
                <small>Ebook</small>
                <small>Archive</small>
            </div>
            <div className="bookLink"> 
                <Link className="bLink" to="/books" onClick={fetchbooks}>BOOKS</Link>
            </div>
            <div className="blogLink">
                <Link to="/blogs" className="blLink" onClick={fetchblogs}>BLOG</Link>
            </div>
            <div className="searchContainer">
               {location.pathname === '/bookDetails/' ? "":<input type="search" onChange={searchClick} placeholder="🔎 SEARCH BOOK" />}
            </div>
            <div className="logoutContainer">
                <Link to="/"><img src={logout} alt="" /></Link>
            </div>
        </nav>   
        </>
    )
}
