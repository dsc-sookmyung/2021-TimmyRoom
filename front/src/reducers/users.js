export const initialState = {
    role: 'nondeveloper',
};

// action type
export const REGISTER_USER = 'REGISTER_USER';

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
                role: action.data,
            };
        default:
            return state;
    }
};

export default reducer;
