// import logo from './logo.svg';
import './App.css';
import Ebook from './components/Ebook';
import {BrowserRouter as Router,Routes,
  Route} from "react-router-dom"
import Api from './components/Context/Api';
import Blog from './components/Blog';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import LoginPage from './components/LoginPage';
function App() {
  return (
    <>
    <Api>
    <Router>
      <Routes>
        <Route path="/books" element={<Ebook/>}/>
        <Route path="/blogs" element={<Blog/>}/>
        <Route path={"/bookDetails/"} element={<BookDetails/>}/>
        <Route path="/blogs/blogDetails" element={<BlogDetails/>}/>
        <Route path="/" element={<LoginPage/>}/>
        {/* <Route path="/" element={<Routeguard/>}/> */}
      </Routes>
    </Router>
    </Api>
    </>
  );
}

export default App;
