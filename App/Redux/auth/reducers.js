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
    actions: {
        ...state.actions,
        login: true
    },
    error: {
        login: '',
    }
});

const loginSuccess = (state, action) => state.merge({
    actions: {
        ...state.actions,
        login: false,
    },
    authToken: action.authToken,
});

const loginFailure = (state, action) => state.merge({
    actions: {
        ...state.actions,
        login: false,
    },
    error: {
        ...state.error,
        login: action.error
    }
});

export default {
    INITIAL_STATE,

    loginAttempt,
    loginSuccess,
    loginFailure,
};
