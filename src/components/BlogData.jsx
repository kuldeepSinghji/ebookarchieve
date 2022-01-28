import React, { useContext, useEffect } from 'react'
import "./blogData.css"
import {Link, useLocation} from "react-router-dom"
import BookContext from './Context/context';
export default function BlogData(props) {
    const {readClick,setBlogDetails,blogs} = useContext(BookContext)
    const {id,header_image,title,title_tag,author} = props.element;
    let location = useLocation()
    let reloadBlogs = ()=>{
        if(location.pathname){
            setBlogDetails(blogs);
        }
    }
    useEffect(() => {
        reloadBlogs()
    }, [])
    return (
        <>
         <div className="titleBlogContainer">
            <div className="titleBox"> 
                <h3>{title}</h3>
            </div>
            <div className="blogDataImgBox">
                <img src={header_image} alt="" />
            </div>
            <div className="descriptionContainer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam pariatur exercitationem non omnis repellendus soluta architecto, unde ipsam commodi! Earum labore magni exercitationem! Quam, illum! Facere sapiente nihil deleniti possimus in tempore quos laboriosam corporis, at reiciendis ipsam autem fugit vitae officiis ducimus incidunt reprehenderit inventore. Delectus aperiam blanditiis beatae harum sint quidem sequi soluta. <Link to="/blogs/blogDetails" onClick={()=>{readClick(id)}}>....read more.</Link></p>
            </div>
            <div className="blogCategoryBox">
                <p># {title_tag}</p>
            </div>
        </div>   
        </>
    )
}
