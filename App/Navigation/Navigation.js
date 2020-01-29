import { NavigationActions, StackActions } from 'react-navigation';

const config = {};

export function setNavigator(nav) {
    if (nav) {
        config.navigator = nav;
    }
}

export function navigate(routeName, navParams) {
    if (config.navigator && routeName) {
        config.navigator.dispatch(
            NavigationActions.navigate({ routeName })
        );
    }
}

export function reset(stackName) {
    if (config.navigator && stackName) {
        config.navigator.dispatch(
            StackActions.reset({
                index: 0,
                key: null,
                actions: [
                    NavigationActions.navigate({ routeName: stackName }),
                ]
            })
        );
    }
}

export function goBack() {
    if (config.navigator) {
        config.navigator.dispatch(
            NavigationActions.back({})
        );
    }
}
