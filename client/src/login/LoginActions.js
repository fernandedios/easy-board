import axios from 'axios';
import { DO_LOGIN } from './LoginConstants';

export const doLogin = ({ email, password }) => async dispatch => {
    const query = `mutation {
        login(email: "${email}", password: "${password}")
    }`;
    const res = await axios.post(`${process.env.REACT_APP_API}/api`, { query });
    dispatch({ type: DO_LOGIN, payload: { ...res.data }});
};
