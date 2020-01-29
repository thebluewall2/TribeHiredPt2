import Types from './types';

const usersGetAllAttempt = () => {
    return {
        type: Types.USERS_GET_ALL_ATTEMPT,
    };
};

const usersGetAllSuccess = (users) => {
    return {
        type: Types.USERS_GET_ALL_SUCCESS,
        users
    };
};

const usersGetAllFailure = (error) => {
    return {
        type: Types.USERS_GET_ALL_FAILURE,
        error
    };
};

export default {
    usersGetAllAttempt,
    usersGetAllSuccess,
    usersGetAllFailure,
};
