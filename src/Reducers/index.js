import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT, ADDTODO } from '../Actions/types';

export const counter = (state = { number: 0 }, action) => {
    console.log(action);
    console.log(state);
    var { number } = state;



    switch (action.type) {
        case INCREMENT:
            return { ...state, number: state.number + 1 };
        case DECREMENT:
            if (state.number > 0) {
                return { ...state, number: state.number - 1 };
            }

            return state;
        default:
            return state;
    }
};

export default combineReducers({ counter });

// import { combineReducers } from 'redux';
// import todos from './todo';

// export default combineReducers({
//     todos
// });

