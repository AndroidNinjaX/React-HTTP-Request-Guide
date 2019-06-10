import React, { Component } from 'react';
import './Blog.css';
import Posts from './Post/Posts';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/*Change "<a herf='/'>" to "Link"*/}
                            <li><Link to="/">Posts</Link></li>
                            {/*Demonstrate 'NavLink', and show "active" class*/}
                            <li><NavLink 
                                to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                                }} 
                                exact
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline' 
                                }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*Example Routes for Show*/}
                <Route path="/" exact render={() => <h1>Example 1</h1>} />
                <Route path="/" render={() => <h1>Example 2</h1>} />
                {/*Display some component*/}
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;