import axios from 'axios'; 
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE } from '../reducers/posts';

const baseUrl = 'http://localhost:8080'; 

function addPostAPI(data){
    const categoryId = data.categoryId; 
    return axios.post(`${baseUrl}/category/${categoryId}`);
}

function loadPostsAPI(data){
    const categoryId = data.categoryId; 
    return axios.get(`${baseUrl}/category/${categoryId}`); 
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

function* loadPosts(action){
    try{
        const result = yield call(loadPostsAPI, action.data); 
        yield put({
            type: LOAD_POSTS_SUCCESS,
            data: result.data, 
        });                                                 
    } catch(e){
        console.error(e); 
        yield put({
            type: LOAD_POSTS_FAILURE, 
            error: e.response.data, 
        }); 
    }
}

function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST, addPost)
}

function* watchLoadPost(){
    yield takeLatest(LOAD_POSTS_REQUEST, loadPosts)
}

export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchLoadPost), 
    ])
}