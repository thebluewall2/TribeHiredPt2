import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../Redux/';
import rootSaga from '../Sagas';

export default () => {
    const middlewares = [];

    const sagaMiddleware = createSagaMiddleware();
    middlewares.push(sagaMiddleware);

    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(...middlewares))
    );

    sagaMiddleware.run(rootSaga);

    return store;
};
