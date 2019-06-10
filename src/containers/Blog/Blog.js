import React, { Component } from 'react';
import './Blog.css';
import Posts from './Post/Posts';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from './NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => {
    return import ('./NewPost/NewPost');
});

class Blog extends Component {
    state ={
        auth: true
    }
    
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/*Change "<a herf='/'>" to "Link"*/}
                            <li><Link to="/posts/">Posts</Link></li>
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
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts/" component={Posts} />
                    <Route render={() => <h1>Not Found</h1>} />
                    {/*<Redirect from="/" to="/posts" />*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;