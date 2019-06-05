import React, { Component } from 'react';
import './Blog.css';
import Posts from './Post/Posts';
import { Route, Link } from 'react-router-dom';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/*Change "<a herf='/'>" to "Link"*/}
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}>New Post</Link></li>
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