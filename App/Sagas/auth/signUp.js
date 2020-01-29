import { take, put, call } from 'redux-saga/effects';

import Actions from '../../Redux/Actions';
import Types from '../../Redux/Types';

export function* watchSignUp(api) {
    while (true) {
        const { user } = yield take(Types.AUTH_SIGN_UP_ATTEMPT);
        yield call(handleSignUp, api, user);
    }
}

export function* handleSignUp(api, user) {
    console.log(user);
}
