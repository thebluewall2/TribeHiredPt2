import { fork } from 'redux-saga/effects';

import { watchLogin } from './login';
import { watchSignUp } from './signUp';

export default (api) => {
    function* rootSaga() {
        yield fork(watchLogin, api);
        yield fork(watchSignUp, api);
    }

    return {
        rootSaga
    };
};
