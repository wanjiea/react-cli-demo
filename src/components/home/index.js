import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <p>这个是home页面</p>
        </div>
    }
}
export default Home;