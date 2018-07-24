import { DO_LOGIN } from './LoginConstants';

const LoginReducer = function(state = null, action) {
    switch (action.type) {
        case DO_LOGIN:
            return action.payload || false;

        default:
            return state;
    }
};

export default LoginReducer;
