import React from 'react';
import ReactDOM from 'react-dom'
import App from './containers/App/App'
import TestPage from './containers/TestPage/TestPage'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import configureStore from './store/configureStore'

// Add the reducer to your store on the `routing` key

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        { /* Tell the Router to use our enhanced history */ }
        <Router history={browserHistory}>
            <Route path='/' component={App}/>
            <Route path='/test' component={TestPage}/>
        </Router>
    </Provider>,
    document.getElementById('app')
);