import React from 'react';
import Router from 'react-router';
import { Link, Route } from 'react-router';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

let AppWrapper = React.createClass({
    render() {
        return (
            <div className="nav">
                <Link to="app">Home</Link>
                <Link to="login">Login</Link>

                {/* this is the importTant part */}
                <RouteHandler/>
            </div>
        );
    }
});

let routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="app" path="/" handler={App}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});