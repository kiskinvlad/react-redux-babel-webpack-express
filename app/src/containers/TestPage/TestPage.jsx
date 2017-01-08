import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {Col, Button} from 'react-bootstrap';
import * as OBJECTACTIONS from '../../actions/objectsActions';
import HelloComponent from '../../components/HelloComponent/HelloComponent';
/* import {bindActionCreators} from 'redux'; */

class TestPage extends Component {
    constructor(props) {
        super(props);

        /* Component state */

        this.state = {componentValue: 0}
    }

    storageValueHandler(){
        const { incrementValue, storageValue } = this.props;
        incrementValue(storageValue);
    }
    stateValueHandler(value){
        value++;
        this.setState({componentValue: value});
    }

/* Call before render */

    componentWillMount() {
        const { fetchObjs  } = this.props;
        fetchObjs();
    }

/* Render to view */

    render() {
        const { fetchedObjects, storageValue } = this.props;
        const { componentValue } = this.state;
        const styles = require('./TestPage.scss');
        return (
            <div className='container'>
                <Col md={12}>
                    <div className={styles.search}>
                        <h3>This is search page</h3>
                        <p>This is fetched items {fetchedObjects.map(el=>el + ', ')}</p>
                        <HelloComponent name='HelloComponent'/>
                        <Button onClick={()=>this.storageValueHandler()}>Update initial storage value: {storageValue}</Button>
                        <Button onClick={()=>this.stateValueHandler(componentValue)}>Update initial state value: {componentValue}</Button>
                    </div>
                </Col>
            </div>
        );
    }
}
/* Types of used variables */

TestPage.propTypes = {
    fetchedObjects: PropTypes.array.isRequired,
    fetchObjs: PropTypes.func.isRequired,
    storageValue: PropTypes.number.isRequired
};

/* Need for using objects from state in react props */

function mapStateToProps(state) {
    return {
        searchPageObjects: state.objectsReducer.searchPageObjects,
        fetchedObjects: state.objectsReducer.fetchedObjects,
        storageValue: state.objectsReducer.storageValue
    }
}

/* Need for call actions in react methods by using props */

function mapDispatchToProps(dispatch) {
    return {
        fetchObjs: () => {
            dispatch(OBJECTACTIONS.fetchObjects());
        },
        incrementValue: (val) => {
            dispatch(OBJECTACTIONS.incrementValue(val))
        }

        /* Or using bindActionCreators : actions: bindActionCreators(OBJECTACTIONS, dispatch).
         Then you can call your action in render or etc by `action` variable.
        Example: action.fetchObjects()
        */

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestPage)