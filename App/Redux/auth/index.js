import { createReducer } from 'reduxsauce';

import Reducers from './reducers';
import Types from './types';

export default {
    reducer: createReducer(Reducers.INITIAL_STATE, {
        [Types.AUTH_LOGIN_ATTEMPT]: Reducers.loginAttempt,
        [Types.AUTH_LOGIN_SUCCESS]: Reducers.loginSuccess,
        [Types.AUTH_LOGIN_FAILURE]: Reducers.loginFailure,

        [Types.AUTH_SIGN_UP_ATTEMPT]: Reducers.signUpAttempt,
        [Types.AUTH_SIGN_UP_SUCCESS]: Reducers.signUpSuccess,
        [Types.AUTH_SIGN_UP_FAILURE]: Reducers.signUpFailure,
    })
};
