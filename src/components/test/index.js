import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from '../../action';
import Api from '../../api';

class  Test extends Component {

    // constructor(props) {
    //     super(props);
    // }

    async componentDidMount() {
        let aa = await Api.souche.QUERY_APPROVER_TASK_SHOWDATA({
        })
        console.log(aa);
    }

    onClick() {
        this.props.dispatch(increment())
    }
    onClick2() {
        this.props.dispatch({ type: 'INCREMENT_ASYNC' })
    }
    render() {
        return (
            <div>
                <div>current number： {this.props.number} <button onClick={()=>this.onClick()}>点击+1</button></div>
                <div>current number： {this.props.number} <button onClick={()=>this.onClick2()}>点击 两秒后+1</button></div>
            </div>
        );
    }
}
export default connect(
    state => ({
        number: state.increment.number //redux视图层实时渲染
    })
)(Test);