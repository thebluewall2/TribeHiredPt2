import { take, put, call } from 'redux-saga/effects';

import Actions from '../../Redux/Actions';
import Types from '../../Redux/Types';

export function* watchLogin(api) {
    while (true) {
        const { email, password } = yield take(Types.AUTH_LOGIN_ATTEMPT);
        yield call(handleLogin, api, email, password);
    }
}

export function* handleLogin(api, email, password) {
    console.log(email);
}
