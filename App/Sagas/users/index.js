import { fork } from 'redux-saga/effects';

import { watchGetAllUsers } from './getAllUsers';

export default (api) => {
    function* rootSaga() {
        yield fork(watchGetAllUsers, api);
    }

    return {
        rootSaga
    };
};
