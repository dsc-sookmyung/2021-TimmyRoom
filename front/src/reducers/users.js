export const initialState = {
    nickname: '',
    phone: '',
    role: 'nondeveloper',
};

// action type
export const REGISTER_USER = 'REGISTER_USER';

// action creator
export const registerAction = (data) => {
    console.log(data);
    return {
        type: REGISTER_USER,
        data,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            console.log(action.data);
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
