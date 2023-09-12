
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'
import { useState } from 'react'

function App() {
  
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog] ;
    setBookmarks(newBookmarks)
  }

  const handleMarksASRead = (id, time) => {

    setReadingTime(readingTime + time)
    // remove the read blog from 

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id) ;
    setBookmarks(remainingBookmarks)

  }

  return (
    <>
    <Header></Header>
   
   <div className='md:flex max-w-7xl border-2 border-red-800 mx-auto'>
   <Blogs handleAddToBookmark={handleAddToBookmark}
   handleMarksASRead={handleMarksASRead}
   ></Blogs>
   <Bookmarks bookmarks={bookmarks} 
   readingTime={readingTime}
   ></Bookmarks>
   </div>
    </>
  )
}

export default App
