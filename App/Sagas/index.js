import { fork, spawn } from 'redux-saga/effects';

import APIs from '../Config/APIs';
import AuthAPI from '../Services/AuthApi';

import auth from './auth';

const authApi = AuthAPI.create(APIs.authApi);

export default function* root() {
    yield fork(auth(authApi).rootSaga);
}
