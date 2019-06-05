import React, { Component } from 'react';
import './Blog.css';
import Post from './Post/Posts';
import { Route } from 'react-router-dom';

class Blog extends Component {
    
    render () {
        
        /*------------------
        Now we make a "post" const, and we want to use this to render all the "Post" components dynamically.
            -We take thew array of "post" from state, and "map" through them.
            -We return and array of "Post" component.
            -We add some properities.
                -If you look at the JSON data, it has an "id", so we fix the key.
                -Also it has a "title". 
                -We pass these to the "Post" component.
        ------------------*/ 

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Post />
            </div>
        );
    }
}

export default Blog;