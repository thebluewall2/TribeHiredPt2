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
    console.log('hello');
    const authToken = yield take(Selectors.getAuthToken);

    console.log(authToken);
}
