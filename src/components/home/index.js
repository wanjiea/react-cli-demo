import React, { Component  } from 'react';
import {Helmet} from 'react-helmet';
import {Table, Radio} from 'antd';
import axios from 'axios';
import '../../mock';
import styles from './index.css';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import update from 'immutability-helper';
import Chapter from '../../assets/js/drag/Chapter';
import { Route } from 'react-router';

import {Link} from 'react-router-dom'; //路由跳转
    
class  Home extends Component {

    constructor() {
        super();
        this.state = {
            dataSource : [],
            columns: [],
            data: [
                {
                  id: 1,
                  text: 'Write a cool JS library',
                  type: 0
                },
                {
                    id: 2,
                    text: 'Make it generic enough',
                    type: 1,
                    children: []
                },
                {
                  id: 3,
                  text: 'Write README',
                  type: 2
                //   children: [
                //         {
                //         id: 30,
                //         text: 'DDDDD'
                //         },
                //         {
                //         id: 31,
                //         text: 'EEEEE'
                //         },
                //         {
                //         id: 32,
                //         text: 'FFFFF'
                //         }
                //     ]
                },
            ]
        }
    }

    
    componentDidMount() {
        this.initMock();
        this.initTable();
    }
    initTable(){
        const dataSourceCopy = [];
        const columnsCopy = []; 
        for(let j = 0; j< 2 ; j++){
            dataSourceCopy.push({
                key: `${j}`,
                question: `你能接受的手机价格${j}`
            })
        }
        for (let k = 0; k <= 4; k++) {
            if(k === 0) {
                columnsCopy.push({
                    title: '',
                    dataIndex: 'question',
                    key: 'question',            
                });
            } else {
                columnsCopy.push({
                    title: `${k}-${k*10}`,
                    dataIndex: `choice${k}`,
                    key: `choice${k}`,
                    render: (text, record, index) => (
                        <span>
                            <Radio
                            defaultChecked= {
                                k === 1 ? true : false
                            }
                            onClick={() => {
                                // console.log(`问题:${record.question}`);
                                // console.log(`结果:${columns[k].title}`);
                                let trList = document.getElementsByClassName("tr");
                                let tdList = trList[index].getElementsByTagName("input");
        
                                for(let i = 0; i<tdList.length; i ++){
                                    if(i === k-1 ){
                                        tdList[i].parentNode.classList.add('ant-radio-checked');
                                    } else {
                                        tdList[i].parentNode.classList.remove('ant-radio-checked');;
                                    }
                                }
                            }}></Radio>
                        </span> 
                    ),
                    align: 'center'          
                });
            }
        }
        this.setState({
            dataSource : dataSourceCopy,
            columns: columnsCopy
        })
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

    handleMoveChapter = (dragIndex, hoverIndex) => {
        const data = this.state.data
        const dragItem = data[dragIndex]
        const newData = update(data, {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragItem]]
        })
        this.setState({data: newData})
    }
    
    handleMoveLesson = (dragIndex, dragParentIndex, hoverIndex, hoverParentIndex) => {
    const data = this.state.data
    const dragItem = data[dragParentIndex].children[dragIndex]
    const dragData = update(data, {
        [dragParentIndex]: {
        children: { $splice: [[dragIndex, 1]] }
        }
    })
    const dropData = update(dragData, {
        [hoverParentIndex]: {
        children: { $splice: [[hoverIndex, 0, dragItem]] }
        }
    })
    this.setState({data: dropData})
    }

    render(){
        const { dataSource , columns } =  this.state;
        
        return <div className ={ styles.content} style ={{ width : '60%' , margin :'30px auto'}}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <p>这个是home 列表拖拽页面</p>
            <Link to="/hoc">跳转到hoc</Link>
            <span 
            style = {{
                margin: '0 5px',
                cursor: 'pointer'
            }}
            onClick={
                () => {
                    this.props.history.push('/hoc');
                }
            }>编程式导航跳转</span>
            <Table 
                dataSource={dataSource} 
                columns={columns} 
                pagination= {false}
                rowClassName= {
                    (record) => {
                        return 'tr';
                    }
                }
            />
            <div>
                { 
                    this.state.data.map((item, i) => (
                        <Chapter
                        key={`c_${item.id}`}
                        index={i}
                        id={`c_${item.id}`}
                        text={item.text}
                        lessons={item.children}
                        type ={item.type }
                        moveChapter={this.handleMoveChapter}
                        moveLesson={this.handleMoveLesson} />
                    )) 
                }
            </div>

        </div>
    }
}
export default DragDropContext(HTML5Backend)(Home);