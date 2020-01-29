import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
    actions: {
        login: false,
        signUp: false,
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
        signUp: '',
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

const signUpAttempt = (state) => state.merge({
    actions: {
        ...state.actions,
        signUp: true
    },
    error: {
        ...state.error,
        signUp: '',
    }
});

const signUpSuccess = (state) => state.merge({
    actions: {
        ...state.actions,
        signUp: false,
    },
});

const signUpFailure = (state, action) => state.merge({
    actions: {
        ...state.actions,
        signUp: false
    },
    error: {
        ...state.error,
        signUp: action.error
    }
});

export default {
    INITIAL_STATE,

    loginAttempt,
    loginSuccess,
    loginFailure,

    signUpAttempt,
    signUpSuccess,
    signUpFailure,
};
