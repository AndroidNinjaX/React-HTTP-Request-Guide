import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    /*Make sure to import Axios. Add this so we can add our 'Axios.get'. The URL has to target 1 single post.*/
    componentDidMount () {
        
    }

    componentDidUpdate() {

    }

    loadDate() {
        /*We check if 'props.id' is true or null. If true then send the request to the URL.*/
        if (this.props.match.params.id) {
            /*We check if we actually have a loadedPost already, and then if our 'loadedPost.id', is NOT equal to our current 'props.id'. Inintially this will fail, because we do not have a loaded post. So we need to check if we dont have a loaded post, OR if we do, then also check our ID's*/
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get("/posts/" + this.props.match.params.id)
                    .then(response => {
                        //console.log(response.data);
                        this.setState({loadedPost: response.data});
                    });
            }
        }
    }

    deletePostHandler = () => {
        axios.delete("/posts/" + this.props.id)
            .then(response => {
                console.log("This is dummy data, and will not acutlly delete anything. Status code '200' means it was successful");
                console.log(response);
            });
    }

    render () {
        let post = <p style={{textAlign: "center"}}>Please select a Post!</p>
        //We add this, to make sure we wait for the data to load. See notes.
        if (this.props.id) {
            post = <p style={{textAlign: "center"}}>Loading...!</p>
        }
        //Then we check if 'state.loadedPost' has been set. See notes.
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;