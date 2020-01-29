const getLoginAttempting = (state) => state.actions.login || false;
const getLoginError = (state) => state.error.login || '';

export default {
    getLoginAttempting,
    getLoginError,
};
