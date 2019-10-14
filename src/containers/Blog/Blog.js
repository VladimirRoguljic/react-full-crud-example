import React, {Component} from 'react';
import './Blog.css';
import { Route, Link } from 'react-router-dom';
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

class Blog extends Component {

    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-posts',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</h1>} />*/}
                {/*<Route path="/"  render={() => <h1>Home2</h1>} />*/}
                <Route path="/" exact component={Posts} />
                <Route path="/new-posts"  component={NewPost} />
            </div>
        );
    }
}

export default Blog;