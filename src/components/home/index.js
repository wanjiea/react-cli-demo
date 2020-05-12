import React, { Component } from 'react';
import '../../mock';
import axios from 'axios';
class  Home extends Component {
    componentDidMount() {
        this.initMock();
    }
    initMock(){
        axios.post('/postdata1',{
            params: {
                name: 'jack'
            }
        }).then(res => {
            console.log(res);
        })
    }
    render(){
        return <div>
            <p>这个是home页面</p>
        </div>
    }
}
export default Home;