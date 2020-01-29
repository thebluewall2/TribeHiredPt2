import { take, put, call } from 'redux-saga/effects';

import NavActions from '../../Navigation/NavigationActions';

import Actions from '../../Redux/Actions';
import Types from '../../Redux/Types';

export function* watchSignUp(api) {
    while (true) {
        const { user } = yield take(Types.AUTH_SIGN_UP_ATTEMPT);
        yield call(handleSignUp, api, user);
    }
}

export function* handleSignUp(api, user) {
    const valid = yield call(verifyUser, user);

    if (!valid) return;

    try {
        const { name, email, password } = user;

        const response = yield call(api.signUp, name, email, password);

        if (response.ok) {
            yield put(Actions.authSignUpSuccess());

            NavActions.navBack();
        } else {
            yield put(Actions.authSignUpFailure(response.data || response.problem));
        }
    } catch (error) {
        yield put(Actions.authSignUpFailure('Something went wrong. Please try again.'));
        return;
    }
}

export function* verifyUser(user) {
    const { name, email, password } = user;

    const nameRegex = new RegExp('^[a-zA-Z ]*$');
    const emailRegex = new RegExp('.+\@.+\..+');
    const passwordRegex = new RegExp('^[a-zA-Z0-9]+$');

    if (!name || !nameRegex.test(name)) {
        yield put(Actions.authSignUpFailure('Invalid name. Please enter only characters.'));

        return false;
    }

    if (!email || !emailRegex.test(email)) {
        yield put(Actions.authSignUpFailure('Invalid email. Please enter a valid email.'));

        return false;
    }

    if (!password || !passwordRegex.test(password)) {
        yield put(Actions.authSignUpFailure('Invalid password. Please enter an alphanumeric password.'));

        return false;
    }

    return true;
}
