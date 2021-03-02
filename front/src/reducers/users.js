export const initialState = {
    role: 'nondeveloper',
    phone: '',
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
                role: action.data.role,
                phone: action.data.phone,
            };
        default:
            return state;
    }
};

export default reducer;
