import React, { useContext, useEffect } from 'react'
import NavBook from './NavBook'
import logo from "./bloglogo1.jpg"
import "./blogDetails.css"
import BookContext from './Context/context'
import { useLocation } from 'react-router-dom'
export default function BlogDetails() {
    const {blogDetails,setBlogDetails,blogs} = useContext(BookContext)
    return (
        <>
        <NavBook/>   
        <div className="blogDetailsMainContainer">
            <div className="blogDetailsNameBox">
                <h1>{blogDetails[0].title}</h1>
            </div>
            <div className="blogDetailsImgBox">
                <img src={blogDetails[0].img} alt="error" />
            </div>
            <div className="blogDetailsDescriptionBox">
                
                <p>
                <h2>Category :{blogDetails[0].category}</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, consequatur minus. Voluptatem eius, consectetur dignissimos assumenda neque veritatis deleniti voluptatum cupiditate. Dicta aliquam labore magnam, commodi a quidem cupiditate. Ullam cumque soluta aut laudantium qui asperiores? Tempora quas eos odit, repudiandae sint totam quis incidunt deserunt ipsum. Voluptatum provident molestias modi commodi quibusdam quas esse nemo laboriosam atque fuga vero consequatur fugiat, amet voluptatem numquam quae.
                {/* <li>Post-Date :{blogDetails[0].post_date}</li> */}
                </p>
                
            </div>
        </div>
        </>
    )
}
