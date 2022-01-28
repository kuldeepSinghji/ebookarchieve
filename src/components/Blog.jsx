import React, { useContext } from 'react'
import BookContext from './Context/context'
import NavBook from './NavBook'
import "./blog.css"
import BlogData from './BlogData'
import Spinner from './Spinner'
export default function Blog() {
    const {blogs,blogDetails,loading} = useContext(BookContext)
    console.log(blogDetails,"blodsde")
    return (
        <>
        <NavBook/>
        <div className="blogMainContainer">
            <div className="headingBox">
            <h1>BLOG CORNER</h1>
        {loading && <Spinner/>}
            </div>
        
        <div className="mainField">
        {
            blogDetails.map((element)=>{
                return(
                    <BlogData key={element.id} element={element}/>
                )
            }) 
        }
        </div>
        </div>
        </>
    )
}
