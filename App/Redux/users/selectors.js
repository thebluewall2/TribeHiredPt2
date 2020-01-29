const getAllAttempting = (state) => state.actions.getAll || false;
const getAllError = (state) => state.error.getAll || '';

const getUsersAll = (state) => state.users || [];

export default {
    getAllAttempting,
    getAllError,

    getUsersAll,
};
