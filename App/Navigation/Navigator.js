import { createStackNavigator } from 'react-navigation-stack';

import SignInScreen from '../Containers/Auth/SignIn';
import HomeScreen from '../Containers/Home/';

const AuthStack = createStackNavigator({
    signIn: {
        screen: SignInScreen,
    },
}, {
    initialRouteName: 'signIn'
});

const HomeStack = createStackNavigator({
    home: HomeScreen,
}, {
    initialRouteName: 'home'
});

const Navigator = createStackNavigator({
    authStack: AuthStack,
    homeStack: HomeStack,
}, {
    initialRouteName: 'authStack',
    headerMode: 'none',
});

export default Navigator;
