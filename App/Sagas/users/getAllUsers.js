import { take, put, call, select } from 'redux-saga/effects';

import Actions from '../../Redux/Actions';
import Types from '../../Redux/Types';
import Selectors from '../../Redux/Selectors';

export function* watchGetAllUsers(api) {
    while (true) {
        yield take(Types.USERS_GET_ALL_ATTEMPT);
        yield call(handleGetAllUsers, api);
    }
}

export function* handleGetAllUsers(api) {
    const authToken = yield select(Selectors.getAuthToken);

    try {
        const response = yield call(api.getAllUsers, authToken);

        if (response.ok) {
            yield put(Actions.usersGetAllSuccess(response.data));
        } else {
            yield put(Actions.usersGetAllFailure(response.data || response.problem));
        }
    } catch (error) {
        console.log(error);

        yield put(Actions.usersGetAllFailure('Something went wrong. Please try again.'));
    }
}
