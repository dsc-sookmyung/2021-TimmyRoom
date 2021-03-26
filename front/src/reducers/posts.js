export const initialState = {
    addPostLoading: false, 
    addPostDone: false, 
    addPostError: null, 
    loadPostsLoading: false, 
    loadPostsDone: false, 
    loadPostsError: null, 
    viewingPost: null, 
    loadPostLoading: false, 
    loadPostDone: false, 
    loadPostError: null, 
    categoryId: null, 
    writer: '', 
    title: '',
    content: '', 
    Posts: null, 
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'; 
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'; 
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST'; 
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE'; 
export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST'; 
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS'; 
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE'; 

export const addPostRequestAction = (data) => {
    return {
        type: ADD_POST_REQUEST, 
        data, 
    }
}

export const loadPostsRequestAction = (data) => {
    return{
        type: LOAD_POST_REQUEST,
        data, 
    }
}

export const loadPostRequestAction = (data) => {
    return{
        type: LOAD_POSTS_REQUEST, 
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST_REQUEST:
            return{
                addPostLoading: true, 
                addPostError:  null, 
                addPostDone: false, 
                categoryId: action.data.categoryId, 
                writer: action.data.writer, 
                title: action.data.title,
                content: action.data.content, 
            }
        case ADD_POST_SUCCESS:
            return{
                ...state, 
                addPostLoading: false,  
                addPostDone: true, 
            }
        case ADD_POST_FAILURE:
            return{
                ...state, 
                addPostLoading: false, 
                addPostError: action.error, 
            }
        case LOAD_POSTS_REQUEST:
            return{
                ...state, 
                loadPostsLoading: true, 
            }
        case LOAD_POSTS_SUCCESS:
            return{
                ...state, 
                loadPostsLoading: false, 
                loadPostsDone: true, 
                Posts: action.data.reverse(), 
            }
        case LOAD_POSTS_FAILURE:
            return{
                ...state, 
                loadPostsLoading: false, 
                loadPostsError: action.error,
            }
        case LOAD_POST_REQUEST:
            return{
                ...state, 
                loadPostLoading: true, 
            }
        case LOAD_POST_SUCCESS:
            return{
                ...state, 
                loadPostLoading: false, 
                loadPostDone: true, 
                viewingPost: action.data, 
            }
        case LOAD_POST_FAILURE:
            return{
                ...state, 
                loadPostLoading: false, 
                loadPostError: action.error, 
            }
        default:
            return state; 
    }
}

export default reducer; 