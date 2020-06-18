import React, { Component, useState }from 'react';

const withHighOrder = (Component) => {
    const NewComponent = (props) => {
        return <Component {...props} name="重新包装给定的新属性"></Component>
    }
    return NewComponent;
}

//创建hoc高阶组件的另一种形式
const withHighOrder2 = (WrappedComponent) => {
    return class extends Component {
        render(props) {
            return <WrappedComponent {...props} name="重新包装给定的新属性2"></WrappedComponent>
        }
    }
}


const withLifeCycle  = (Component) => {
    class NewComponent extends React.Component {
        componentDidMount() {
            console.log('重写生命周期')
        }
        render() {
            return <Component {...this.props}></Component>
        }
    }
    return NewComponent;
}
class HocSon extends Component {
    render() {
        return (
            <div>
                {
                    this.props.name
                }
            </div>
        );
    }
}
export default withLifeCycle(withHighOrder2(HocSon));
//第二步，给创建的高阶组件传递需要重新包装的属性，这里是给Hoc组件重新包装