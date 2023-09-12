import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../SingleBookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
         <div className="md:w-1/3 bg-gray-300 ml-4 pt-4">
            <div>
                <h3 className='text-3xl'> Reading Time : {readingTime}</h3>
            </div>
            <h2 className='text-3xl text-center '>BookMarks : {bookmarks.length}</h2>

            {
                bookmarks.map((bookmark,idx) => <Bookmark
                key={idx}
                bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array ,
    readingTime : PropTypes.number 
};

export default Bookmarks;