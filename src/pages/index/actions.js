import '@tarojs/async-await'
import {
  ADD,
  MINUS,
  ASYNC,
  ASYNC_BEFORE
} from './action-type';
import Http from '../../api/Server'
import Url from '../../api/url';

export const add = () => {
  return {
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}

export const asyncAdd = (params) => {
  // 返回函数，异步dispatch
  return async dispatch => {
    try{
      dispatch({
        type: ASYNC_BEFORE,
      })
      let result = await Http.request('post',Url.lineRecommendQuery,params);
      // 如果不成功，则将不成功的信息打印出来
      if(result){
        if(!result.success) console.error(result.message);
        dispatch({
          type: ASYNC,
          response: result,
        })
      }
    }catch(err){
      console.error(err);
    }
  }
}
