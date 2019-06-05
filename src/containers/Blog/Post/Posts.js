import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    state = {
        post: [],
    }
    
    //We use componentDidMount and make the HTTP request here.
    componentDidMount () {
        /*Axios has a .get method for sending GET request. This method takes at least 1 argument. We use the URL that we get from our dummy page.*/
        axios.get("/posts")
            .then(response => {
                //We get just the selected data we want.
                const posts = response.data.slice(0, 4);
                //We make a new const and add an "author" to each element.
                const updatedPost = posts.map(post => {
                    return {
                        ...post,
                        author: 'TJ'
                    }
                });
                this.setState({post: updatedPost});
                //console.log(response);
            })
            .catch(error => {
                console.log(error);
                //this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render() {
        //Make a new variable and then override it, if error is NOT true.
        let post = <p style={{textAlign: "center"}}>Something went wrong!</p>;

        //Override initial "post" if we do NOT have an error.
        if (!this.state.error) {
            post = this.state.post.map(post => {
                return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />
            });
        }

        return (
            <section className="Posts">
                {post}
            </section>
        );
    }
}

export default Posts;