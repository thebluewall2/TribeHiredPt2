import { createStackNavigator } from 'react-navigation-stack';

import SignInScreen from '../Containers/Home/SignIn';

const Navigator = createStackNavigator({
    SignIn: SignInScreen,
}, {
    initialRouteName: 'SignIn',
});

export default Navigator;
