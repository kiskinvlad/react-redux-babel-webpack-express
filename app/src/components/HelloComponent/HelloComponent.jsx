import React, { PropTypes, Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class HelloComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        this.name = this.props.name;
        require('./HelloComponent.scss');

        return <div>This is component. His name is <span className='red'><FontAwesome name='github'/>{this.name}</span>!!!</div>;
    }
}

HelloComponent.propTypes = {
    name: PropTypes.string.isRequired
};