import Mock from 'mockjs';

export default Mock.mock('/postdata1','post',{
    success: true,
    message: '@cparagraph',
    'list|1-5': [{
        'sid|+1': 1,
        'userId|5': '',
        "name":" @cname", 
        "ago|18-28": 25,
        "sex|1": ["男","女"],
        "job|1": ["web","UI","python","php"]
    }]   
})