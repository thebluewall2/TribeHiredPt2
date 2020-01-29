import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
    actions: {
        getAll: false,
    },
    users: [],
    error: {
        getAll: ''
    }
});

const getAllAttempt = (state) => state.merge({
    actions: {
        ...state.actions,
        getAll: true
    },
    error: {
        ...state.error,
        getAll: '',
    }
});

const getAllSuccess = (state, action) => state.merge({
    actions: {
        ...state.actions,
        getAll: false
    },
    users: action.users
});

const getAllFailure = (state, action) => state.merge({
    actions: {
        ...state.actions,
        getAll: false,
    },
    error: {
        ...state.error,
        getAll: action.error
    }
});

export default {
    INITIAL_STATE,

    getAllAttempt,
    getAllSuccess,
    getAllFailure,
};
