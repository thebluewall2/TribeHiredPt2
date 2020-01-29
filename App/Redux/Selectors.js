import auth from './auth/selectors';
import users from './users/selectors';

const getAuthLoginAttempting = (state) => auth.getLoginAttempting(state.auth);
const getAuthLoginError = (state) => auth.getLoginError(state.auth);

const getAuthSignUpAttempting = (state) => auth.getSignUpAttempting(state.auth);
const getAuthSignUpError = (state) => auth.getSignUpError(state.auth);

const getAuthToken = (state) => auth.getAuthToken(state.auth);

const getUsersGetAllAttempting = (state) => users.getAllAttempting(state.users);
const getUsersGetAllError = (state) => users.getAllError(state.users);
const getUsersAll = (state) => users.getUsersAll(state.users);

export default {
    getAuthLoginAttempting,
    getAuthLoginError,

    getAuthSignUpAttempting,
    getAuthSignUpError,

    getAuthToken,

    getUsersGetAllAttempting,
    getUsersGetAllError,
    getUsersAll,
};
