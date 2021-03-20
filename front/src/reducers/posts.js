export const initialState = {
    addPostLoading: false, 
    addPostDone: false, 
    addPostError: null, 
    categoryId: null, 
    title: '',
    content: '', 
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'; 
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'; 
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const addPostRequestAction = (data) => {
    return {
        type: ADD_POST_REQUEST, 
        data, 
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
        default:
            return state; 
    }
}

export default reducer; 