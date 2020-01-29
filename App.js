import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';

import Navigator from './App/Navigation/Navigator';
import configureStore from './App/Store/Store';
import { setNavigator } from './App/Navigation/Navigation';

const AppContainer = createAppContainer(Navigator);

class App extends React.PureComponent {
    componentDidMount() {
        setNavigator(this.navigator);
    }

    _renderApp = () => {
        return (
            <Provider store={configureStore()}>
                <AppContainer
                    ref={nav => { this.navigator = nav; }}
                />
            </Provider>
        );
    }

    render() {
        return this._renderApp();
    }
}

export default App;
