import axios from 'axios'; 
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, 
    LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE,
    LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE } from '../reducers/posts';
import { baseUrl } from './user';

function addPostAPI(data){
    const categoryId = data.categoryId; 
    return axios.post(`${baseUrl}/category/${categoryId}`);
}

function loadPostsAPI(data){
    const categoryId = data.categoryId; 
    return axios.get(`${baseUrl}/category/${categoryId}`); 
}

function loadPostAPI(data){
    const boardId = data.boardId; 
    return axios.get(`${baseUrl}/board/${boardId}`); 
}

function addCommentAPI(data){
    // return axios.post(`${baseUrl}/`)
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

function* loadPost(action){
    try{
        const result = yield call(loadPostAPI, action.data); 
        yield put({
            type: LOAD_POST_SUCCESS,
            data: result.data, 
        }); 
    }
    catch(e){
        console.error(e); 
        yield put({
            type: LOAD_POST_FAILURE,
            error: e.response.data, 
        })
    }
}

function* addComment(action){
    try{
        const result = yield call(addCommentAPI, action.data); 
        yield put({
            type: ADD_COMMENT_SUCCESS, 
            data: result.data, 
        })
    }
    catch(e){
        console.error(e); 
        yield put({
            type: ADD_COMMENT_FAILURE, 
            error: e.response.data, 
        })
    }
}

function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST, addPost)
}

function* watchLoadPosts(){
    yield takeLatest(LOAD_POSTS_REQUEST, loadPosts)
}

function* watchLoadPost(){
    yield takeLatest(LOAD_POST_REQUEST, loadPost)
}

function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}

export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchLoadPosts), 
        fork(watchLoadPost), 
        fork(watchAddComment), 
    ])
}