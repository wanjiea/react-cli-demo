import React, { Component, useState }from 'react';
import { connect } from 'react-redux';
import { increment } from '../../redux/action';
import Api from '../../api';
import { Checkbox } from 'antd';



function  Aa() {
    const [number, add] = useState(0);
    const [number2, add2] = useState(0);
    return (
        <div>
           <p>
            current number： {number} <button onClick={()=>add(number+1)}>点击 两秒后+1</button>
           </p>
           <p>
           current number2： {number2} <button onClick={()=>add2(number2+1)}>点击 两秒后+1</button>
           </p>
        </div>
        
    )
}
const Page = () => {
    const pictures = [
        {
          id: '1',
          name: 'foo1',
          url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
        {
          id: '2',
          name: 'foo2',
          url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
        {
          id: '3',
          name: 'foo3',
          url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
    ];
    const [value, setValue] = React.useState(['1']);
    
    console.log(value); // 输出用户选择图片 id。
    
    return <PictureSelect pictures={pictures} value={value} onChange={(value) => setValue(value)} />
};
function dealPicture(picList) {
    let result = [];
    return new Promise(resolve => {
        // eslint-disable-next-line 
        picList.map((picItem) => {
            if(picItem.checked) {
                result.push(picItem.id);
            }
        });
        resolve(result)
    }).then((result) =>{
        return result;
    })
    
}
const PictureSelect =  (props) => {

    let [pictureListCopy, setList] = React.useState(props.pictures);

    console.log(pictureListCopy);
    props.pictures.forEach(item => {
        if(item.checked === undefined) {
            item.checked = false;
        }
    })

    return (
        <div style={{ display: 'flex'}}>
            <div>
                <Checkbox onClick={
                    (e) => {
                        pictureListCopy.forEach((picItem) => {
                            picItem.checked = e.target.checked;
                        });
                        setList(null);
                        setList(pictureListCopy);
                    }
                }>全选</Checkbox>
            </div>
            {
                pictureListCopy && pictureListCopy.map((picItem, picIndex) => {
                    return <div key={picItem.id} style={{
                        position: 'relative'
                    }}>
                        <img src={picItem.url} alt=''></img>
                        <p>{picItem.name}</p>
                        <Checkbox
                            style={{ position: 'absolute', top:'0', right: '10px'}}
                            defaultChecked= {picItem.checked}
                            onChange = {
                            async (e) => {
                                pictureListCopy[picIndex].checked = e.target.checked;
                                let result = await dealPicture(pictureListCopy);
                                props.onChange(result);
                            }
                        }></Checkbox>
                    </div>
                })
            }
        </div>
    )
}


class  Test extends Component {

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
                <Aa/>
                <Page/>
            </div>
        );
    }
}
export default connect(
    state => ({
        number: state.increment.number //redux视图层实时渲染
    })
)(Test);