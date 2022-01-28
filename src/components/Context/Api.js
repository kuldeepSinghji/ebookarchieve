import React,{useState,useEffect} from 'react'
import BookDetails from '../BookDetails'
import BookContext from './context'
import img1 from "../1c.png"
import img2 from "../1w.png"
import img3 from "../avengers.jpg"
import img4 from "../backg.jpeg"
import img5 from "../blog1.jpg"
import img6 from "../blue.png"
import img7 from "../bloglogo1.jpg"
import img8 from "../1c.png"
import img9 from "../insta.webp"
function Api(props) {
    
    const books = [
        {
            id:1,
            img: img1,
            name:"Networking",
            category:"NetWorking",
            description:"erererwerw"
        },
        {
            id:2,
            img:img2,
            name:"Networking",
            category:"Images",
            description:"erererwerw"
        },
        {
            id:3,
            img:img3,
            name:"Networking",
            category:"Movies",
            description:"erererwerw"
        },
        {
            id:4,
            img:img4,
            name:"Hotel Mangement",
            category:"coding",
            description:"erererwerw"
        },
        {
            id:5,
            img:img5,
            name:"Others",
            category:"Movies",
            description:"erererwerw"
        },
        {
            id:6,
            img:img6,
            name:"C++",
            category:"Cloud Computing",
            description:"erererwerw"
        }
        ,
        {
            id:7,
            img:img7,
            name:"C++",
            category:"NetWorking",
            description:"erererwerw"
        },
        {
            id:8,
            img:img8,
            name:"C++",
            category:"NetWorking",
            description:"erererwerw"
        },
        {
            id:9,
            img:img9,
            name:"C++",
            category:"NetWorking",
            description:"erererwerw"
        }
    ]


    const blogs = [
        {
            id:1,
            img:img1,
            title:"Python Introduction",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quia aliquid corporis ab eaque labore veniam blanditiis voluptates unde! Inventore quae ea maxime et, harum, blanditiis, voluptatem ipsam laudantium debitis excepturi cumque expedita animi!",
            category:"Codding"
        },
        {
            id:2,
            img:img2,
            title:"DataStructure Introduction",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quia aliquid corporis ab eaque labore veniam blanditiis voluptates unde! Inventore quae ea maxime et, harum, blanditiis, voluptatem ipsam laudantium debitis excepturi cumque expedita animi!",
            category:"Codding"
        },
        {
            id:3,
            img:img3,
            title:"Python Introduction",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quia aliquid corporis ab eaque labore veniam blanditiis voluptates unde! Inventore quae ea maxime et, harum, blanditiis, voluptatem ipsam laudantium debitis excepturi cumque expedita animi!",
            category:"Codding"
        },
        {
            id:4,
            img:img4,
            title:"HTML Introduction",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quia aliquid corporis ab eaque labore veniam blanditiis voluptates unde! Inventore quae ea maxime et, harum, blanditiis, voluptatem ipsam laudantium debitis excepturi cumque expedita animi!",
            category:"Codding"
        },
    ]

    const [booksDetails, setBooksDetails] = useState(books)
    const [loading, setLoading] = useState(false)
    const [blogDetails, setBlogDetails] = useState([])
    // const [menu, setMenu] = useState([])

    //This filterbutton is for fetching throung network
    // const filterButton = async(category)=>{
    //     setLoading(true)
    //     let booksURL = "http://shadowvj.pythonanywhere.com/api/resourceDatas/"
    //     let data =await fetch(booksURL);
    //     let parseData = await data.json();
    //     const newBooks = parseData.filter((element)=>{
    //         return category === element.category;
    //     })
    //     if(category === "All"){
    //         setLoading(false)
    //         setBooksDetails(parseData)
    //         return;
    //     }
    //     // console.log(newBooks,"booksnew")
    //     setLoading(false)
    //     setBooksDetails(newBooks)
    // }

    //This button is for simple api
    const filterButton =(category)=>{
        
        const newBooks = books.filter((element)=>{
            return category === element.category;
        })
        if(category === "All"){
            setLoading(false)
            setBooksDetails(books)
            return;
        }
        // console.log(newBooks,"booksnew")
        setLoading(false)
        setBooksDetails(newBooks)
    }
    
    //This is for network request
    // const api = async()=>{
    //     // setLoading(true)
    //     // let booksURL = "http://shadowvj.pythonanywhere.com/api/resourceDatas/"    
    //     // let data =await fetch(booksURL);
    //     // let parseData = await data.json();
    //     setBooksDetails(parseData)
    //     setLoading(false)
    // }

    //This is only for simple api
    const api = ()=>{
        setLoading(false)
        // let booksURL = "http://shadowvj.pythonanywhere.com/api/resourceDatas/"    
        // let data =await fetch(booksURL);
        // let parseData = await data.json();
        setBooksDetails(books)
        setLoading(false)
    }

    const blogApi = async()=>{
        setLoading(false)
        // let blogURl = "http://shadowvj.pythonanywhere.com/api/resourceDataBlogs/"
        // let data = await fetch(blogURl)
        // let parseData = await data.json();
        // console.log(parseData,"blogs")
        setBlogDetails(blogs);
        setLoading(false)
    }
     useEffect(() => {
        api();
        blogApi();
    }, [])

    const searchClick = async(e)=>{
        let searchValue = e.target.value;
        if(searchValue.length !== 0){
            let searchBook = booksDetails.filter((book)=>{
                return(
                    book.name.toLowerCase().includes(searchValue.toLowerCase())
                )
            })
            setBooksDetails(searchBook);
        }else if(searchValue.length === 0){
            setLoading(false)
            // let booksURL = "http://shadowvj.pythonanywhere.com/api/resourceDatas/"    
            // let data =await fetch(booksURL);
            // let parseData = await data.json();
            setBooksDetails(books)
            setLoading(false)
        }
        console.log(searchValue.length)
    }
    const [vclick, setVclick] = useState(false)
    const [rclick, setRclick] = useState(false)
    const viewClick =async (id)=>{
        setVclick(true)
        setLoading(false)
        // let booksURL = "http://shadowvj.pythonanywhere.com/api/resourceDatas/"
        // let data =await fetch(booksURL);
        // let parseData = await data.json();
        const viewbook = books.filter((element)=>{
            return id === element.id;
        })
        console.log(viewbook,"booksnew")
        setLoading(false)
        setBooksDetails(viewbook)
        console.log(id)
    }

    const readClick =async (id)=>{
        console.log(id,"readclick")
        setRclick(true)
        // setLoading(true)
        // let blogURl = "http://shadowvj.pythonanywhere.com/api/resourceDataBlogs/";
        // let data =await fetch(blogURl);
        // let parseData = await data.json();
        const viewblog = blogDetails.filter((element)=>{
            return id === element.id;
        })
        console.log(viewblog,"bookblog")
        setLoading(false)
        setBlogDetails(viewblog)
        console.log(id)
    }
    let fetchblogs;
    console.log(rclick,"rclick")
    if(rclick){
    fetchblogs=()=>{
        blogApi()
        setRclick(false)}
    }
    let fetchbooks;
    if(vclick){
    fetchbooks=()=>{
        api()
        setVclick(false)}
    }

    // useEffect(() => {   
    //     setVclick(false);
    // }, [fetchbooks])
    // useEffect(() => {
    //     setRclick(false)
    // }, [fetchblogs])
    return (
        <BookContext.Provider value={{books,blogs,filterButton,booksDetails,loading,blogDetails,setBlogDetails,blogApi,searchClick,viewClick,readClick,fetchbooks,fetchblogs}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default Api;
