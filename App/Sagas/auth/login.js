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
    const valid = yield call(verify, email, password);

    if (!valid) return;

    try {
        const response = yield call(api.login, email, password);

        if (response.ok && response.data) {
            yield put(Actions.authLoginSuccess(response.data));
        } else {
            const problem = response.data || response.problem;

            yield put(Actions.authLoginFailure(problem));
        }
    } catch (error) {
        console.log(error);

        yield put(Actions.authLoginFailure(error));
    }
}

export function* verify(email, password) {
    if (!email || !password) {
        yield put(Actions.authLoginFailure('Please enter both your email and password.'));
        return false;
    }

    return true;
}
