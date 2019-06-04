import React, { Component } from 'react';
//import axios from 'axios';
//This is the import of Axios Instance
import axios from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        post: [],
        selectedPostId: null,
        error: false
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
                //console.log(error);
                this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
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
                <section className="Posts">
                    {/*We output the "post" const*/}
                    {post}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;