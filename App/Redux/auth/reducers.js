import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
    actions: {
        login: false,
    },
    authToken: '',
    error: {
        login: '',
    },
});

const loginAttempt = (state) => state.merge({
    loading: true,
    error: {
        login: '',
    }
});

export default {
    INITIAL_STATE,

    loginAttempt,
    loginSuccess,
    loginFailure,
};
