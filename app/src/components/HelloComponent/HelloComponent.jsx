import React, { PropTypes, Component } from 'react';

export default class HelloComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        this.name = this.props.name;
        return <div>This is component. His name is {this.name}!!!</div>;
    }
}

HelloComponent.propTypes = {
    name: PropTypes.string.isRequired
};