import axios from 'axios'; 
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE } from '../reducers/posts';

const baseUrl = 'http://localhost:8080'; 

function addPostAPI(data){
    const categoryId = data.categoryId; 
    return axios.post(`${baseUrl}/category/${categoryId}`);
}

function* addPost(action){
    try{
        const result = yield call(addPostAPI, action.data); 
        yield put({
            type: ADD_POST_SUCCESS, 
            data: result.data, 
        }); 
    } catch(e){
        console.error(e); 
        yield put({
            type: ADD_POST_FAILURE,
            error: e.response.data, 
        }); 
    }
}

function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST, addPost)
}

export default function* postSaga(){
    yield all([
        fork(watchAddPost),
    ])
}