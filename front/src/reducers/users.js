import axios from 'axios';

export const initialState = {
    nickname: '',
    phone: '',
    role: 'nondeveloper',
};

// action type
export const REGISTER_USER = 'REGISTER_USER';

export const registerUser = async (data) => {
    return (dispatch) => {
        dispatch(registerAction(data));
        return axios.post('http://localhost:8080/users', data);
    };
};

// action creator
export const registerAction = (data) => {
    return {
        type: REGISTER_USER,
        data,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                nickname: action.data.nickname,
                phone: action.data.phone,
                role: action.data.role,
            };
        default:
            return state;
    }
};

export default reducer;
