import  service from '../../utils';
import qs from 'qs';
 
const { stringify } = qs;
const { post, get} = service;
 
//get方式
export async function fetchData1(params) {
  	return get(`/api/bbb?${stringify(params)}`);
}
 
//post方式
export async function QUERY_APPROVER_TASK_SHOWDATA(params) {
  	return post(`/task/queryApproverTaskShowData.json`, params);
}