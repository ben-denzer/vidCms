import React from 'react';
import AllBlogs from '../content/AllBlogs';

const EditBlogHome = (props) => {
    return (
        <div id="edit_blog_home_container">
            <AllBlogs rootUrl={'/admin/edit/blog/'} showDate={true} allBlogs={props.blogs} />
        </div>
    );
};

export default EditBlogHome;