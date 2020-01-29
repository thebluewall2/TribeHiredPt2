import { navigate, goBack, reset } from './Navigation';

const navPush = (routeName) => navigate(routeName);
const navBack = () => goBack();
const navReset = (stackName) => reset(stackName);

const navResetToHomeScreen = () => navReset('homeStack');

export default {
    navPush,
    navBack,
    navReset,

    navResetToHomeScreen,
};
