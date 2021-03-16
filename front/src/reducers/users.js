import axios from 'axios';

export const initialState = {
    logInError: null, 
    isLoggedIn: false,
    nickname: '',
    phone: '',
    role: 'user',
};

// action type
export const REGISTER_USER = 'REGISTER_USER';
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const registerUser = (data) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/users', data);
        dispatch(registerAction(data));
    };
};

// action creator
export const registerAction = (data) => {
    return {
        type: REGISTER_USER,
        data,
    };
};

export const loginRequestAction = (data) => {
    return {
        type: LOG_IN_REQUEST,
        data,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                isLoggedIn: true,
                nickname: action.data.nickname,
                phone: action.data.phone,
                role: action.data.role,
            };
        case LOG_IN_REQUEST:
            return {
                logInError: null,
                nickname: action.data.nickname,
                phone: action.data.phone,
            };
        case LOG_IN_SUCCESS:
            return{
                isLoggedIn: true,
                nickname: action.data.nickname,
                phone: action.data.phone,
            }
        case LOG_IN_FAILURE:
            return{
                isLoggedIn: true,
                logInError: true, 
            }
        default:
            return state;
    }
};

export default reducer;
