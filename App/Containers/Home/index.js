import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Actions from '../../Redux/Actions';
import Selectors from '../../Redux/Selectors';

class Home extends PureComponent {
    componentDidMount() {
        const { getAllUsers } = this.props;

        getAllUsers();
    }

    render() {
        return (
            <View />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: Selectors.getUsersGetAllAttempting(state),
        error: Selectors.getUsersGetAllError(state),
        users: Selectors.getUsersAll(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsers: () =>
            dispatch(Actions.usersGetAllAttempt()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
