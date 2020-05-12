
import actionType from '../action/index';
const initialState = {
    number: 0
};
const incrementReducer = (state = initialState, action = actionType) => {
    switch(action.type) {
        case 'INCREMENT': {
            state.number += 1;
            return { ...state }
        };
        default: return state;
    }
};
export default incrementReducer;