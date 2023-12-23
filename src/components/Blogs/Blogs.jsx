import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'
// testing to github 
// testing to github 
// testing to github 
// testing to github



const Blogs = ({handleAddToBookmark, handleMarksASRead}) => {

    const [blogs, setBlogs] = useState([]);
    const [time , setTime] = useState(2) ;

    useEffect( () => {
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs : {blogs.length}</h1>  
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark}
                    handleMarksASRead ={handleMarksASRead}
                ></Blog>)
                
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark : PropTypes.func,
    handleMarksASRead : PropTypes.func
}

export default Blogs;