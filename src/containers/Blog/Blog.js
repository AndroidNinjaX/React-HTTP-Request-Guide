import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        post: []
    }

    //We use componentDidMount and make the HTTP request here.
    componentDidMount () {
        /*Axios has a .get method for sending GET request. This method takes at least 1 argument. We use the URL that we get from our dummy page.*/
        axios.get("http://jsonplaceholder.typicode.com/posts")
            .then(response => {
                this.setState({post: response.data});
                //console.log(response);
            });
    }

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
        const post = this.state.post.map(post => {
            return <Post key={post.id} title={post.title} />
        });

        return (
            <div>
                <section className="Posts">
                    {/*We output the "post" const*/}
                    {post}
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