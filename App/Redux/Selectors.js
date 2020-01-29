import auth from './auth/selectors';

const getAuthLoginAttempting = (state) => auth.getLoginAttempting(state.auth);
const getAuthLoginError = (state) => auth.getLoginError(state.auth);

export default {
    getAuthLoginAttempting,
    getAuthLoginError,
};
