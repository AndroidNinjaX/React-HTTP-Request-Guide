import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    //We use componentDidMount and make the HTTP request here.
    componentDidMount () {
        /*Axios has a .get method for sending GET request. This method takes at least 1 argument. We use the URL that we get from our dummy page.*/
        axios.get("http://jsonplaceholder.typicode.com/posts")
            .then(response => {
                console.log(response);
            });
    }

    render () {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;