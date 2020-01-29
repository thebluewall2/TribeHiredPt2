const getLoginAttempting = (state) => state.actions.login || false;
const getLoginError = (state) => state.error.login || '';

const getSignUpAttempting = (state) => state.actions.signUp || false;
const getSignUpError = (state) => state.error.signUp || '';

const getAuthToken = (state) => state.authToken || '';

export default {
    getLoginAttempting,
    getLoginError,

    getSignUpAttempting,
    getSignUpError,

    getAuthToken,
};
