import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

/* Quick start on how to set up a React Router - https://reactrouter.com/web/guides/quick-start */

const App = (): React.ReactElement => (
    <Router>
        <div className="App">
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="page">
                <Switch>
                    <Route path="/about">
                        <h1>About 🌎</h1>
                    </Route>
                    <Route path="/users">
                        <h1>User 🌎</h1>
                    </Route>
                    <Route path="/">
                        <h1>Hello 🌎</h1>
                    </Route>
                </Switch>
            </div>
        </div>
    </Router>
);

export default App;
