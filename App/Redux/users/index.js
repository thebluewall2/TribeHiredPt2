import { createReducer } from 'reduxsauce';

import Reducers from './reducers';
import Types from './types';

export default {
    reducer: createReducer(Reducers.INITIAL_STATE, {
        [Types.USERS_GET_ALL_ATTEMPT]: Reducers.getAllAttempt,
        [Types.USERS_GET_ALL_SUCCESS]: Reducers.getAllSuccess,
        [Types.USERS_GET_ALL_FAILURE]: Reducers.getAllFailure,
    })
};
