import React, {Component} from 'react';
import { connect } from 'react-redux';
import { sayHello } from './../../redux/action';
class Home extends Component{
    componentDidMount() {
        this.props.onTextInit();
    }
    render() {
        return (
            <div className="home">
                Welcome to React ！！！
            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.text
});

const mapDispatchToProps = dispatch => ({
    onTextInit: () => {
        dispatch(sayHello('hello, welcome to redux'))
    },
    onTextClick: () => {
        dispatch(sayHello('Store state clicked'))
    },
    onTextChange: () => {
        dispatch(sayHello('Store state changed'))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);