import axios from 'axios';

export const initialState = {
    isLoggedIn: false,
    nickname: '',
    phone: '',
    role: 'user',
};

// action type
export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const registerUser = async (data) => {
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

export const loginUser = async(data) => {
    return async(dispatch) => {
        const request = await axios.post('http://localhost:8080/login', data);
        console.log(request); 
        // dispatch(loginAction(data));
    };
};

export const loginAction = (data) => {
    return {
        type: LOGIN_USER,
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
        case LOGIN_USER:
            return {
                isLoggedIn: true,
                nickname: action.data.nickname,
                phone: action.data.phone,
            };
        default:
            return state;
    }
};

export default reducer;
