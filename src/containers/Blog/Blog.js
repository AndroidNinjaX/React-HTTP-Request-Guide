import React, { Component } from 'react';
import './Blog.css';
import Posts from './Post/Posts';
import { Route } from 'react-router-dom';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    
    render () {
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
                {/*Example Routes for Show*/}
                <Route path="/" exact render={() => <h1>Example 1</h1>} />
                <Route path="/" render={() => <h1>Example 2</h1>} />
                {/*Display some component*/}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;