import axios from 'axios';

export const initialState = {
    signUpLoading: false, // 회원가입 시도중
    signUpDone: false,
    signUpError: null,
    logInError: null, 
    isLoggedIn: false,
    nickname: '',
    phone: '',
    role: 'user',
};

// action type
export const REGISTER_USER = 'REGISTER_USER';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const signUpRequestAction = (data) => {
    return {
        type: SIGN_UP_REQUEST, 
        data,
    }
}

export const loginRequestAction = (data) => {
    return {
        type: LOG_IN_REQUEST,
        data,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_REQUEST:
            return{
                signUpLoading: true,
                signUpError: null,
                signUpDone: false,
                nickname: action.data.nickname,
                phone: action.data.phone,
                role: action.data.role,
            }
        case SIGN_UP_SUCCESS:
            return{
                ...state,
                signUpLoading: false,
                signUpDone: true,
                isLoggedIn: true,
            }
        case SIGN_UP_FAILURE:
            return{
                signUpLoading: false,
                signUpError: action.error,
            }
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
                logInError: true, 
            }
        default:
            return state;
    }
};

export default reducer;
