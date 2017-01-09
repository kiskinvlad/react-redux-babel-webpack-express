import React from 'react';
import {Link} from 'react-router'
require('../../../styles/main.scss');
require('./App.scss');

export default class App extends React.Component {
    render() {
        return <div>Hello World!!! Click <Link to={'/test'}>here</Link> for navigate to the test page</div>;
    }
}