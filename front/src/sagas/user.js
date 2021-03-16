import axios from 'axios';
import { all, call, fork, put, takeLatest, delay } from 'redux-saga/effects';

import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/users'

function loginAPI(data){
    // 서버에 요청을 보내는 부분 
    return axios.post('http://localhost:8080/login', data); 
}

function* login(action){
    try{
        const result = yield call(loginAPI, action.data);
        yield console.log(axios.post('http://localhost:8080/login', action.data));
        yield put({ // put은 dispatch와 동일 
            type: LOG_IN_SUCCESS, 
            data: result.data,
        });    
    } catch(e){ // loginAPI 실패
        console.error(e); 
        yield put({
            type: LOG_IN_FAILURE, 
            error: e.response.data,
        }); 
        // alert('로그인 정보를 다시 확인해주세요');
    }
}

function* watchLogin(){
    yield takeLatest(LOG_IN_REQUEST, login)
}

export default function* userSaga(){
    yield all([
        fork(watchLogin), 
    ])
}