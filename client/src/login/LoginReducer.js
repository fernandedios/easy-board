import { DO_LOGIN } from './LoginConstants';

const loginReducer = function(state = null, action) {
    switch (action.type) {
        case DO_LOGIN:
            return action.payload || false;

        default:
            return state;
    }
};

export default loginReducer;
