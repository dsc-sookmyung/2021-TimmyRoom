import axios from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/users'

function signUpAPI(data){
    return axios.post('http://localhost:8080/users', data); 
}

function loginAPI(data){
    // 서버에 요청을 보내는 부분 
    return axios.post('http://localhost:8080/login', data); 
}

function* signUp(action){
    try{
        const result = yield call(signUpAPI, action.data);
        yield put({
            type: SIGN_UP_SUCCESS,
            data: result,
        }); 
    } catch(e){
        console.error(e); 
        yield put({
            type: SIGN_UP_FAILURE, 
            error: e.response.data,
        })
    }
}

function* login(action){
    try{
        const result = yield call(loginAPI, action.data);
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
        alert('로그인 정보를 다시 확인해주세요');
    }
}

function* watchSignUp(){
    yield takeLatest(SIGN_UP_REQUEST, signUp)
}

function* watchLogin(){
    yield takeLatest(LOG_IN_REQUEST, login)
}

export default function* userSaga(){
    yield all([
        fork(watchLogin),
        fork(watchSignUp),  
    ])
}