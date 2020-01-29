import { navigate, goBack, reset } from './Navigation';

const navPush = (routeName) => navigate(routeName);
const navBack = () => goBack();
const navReset = (stackName) => reset(stackName);

const navResetToHomeScreen = () => navReset('homeStack');
const navToSignUp = () => navPush('signUp');

export default {
    navBack,

    navResetToHomeScreen,
    navToSignUp,
};
