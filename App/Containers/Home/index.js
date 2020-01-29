import React, { PureComponent } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';

import Actions from '../../Redux/Actions';
import Selectors from '../../Redux/Selectors';

import styles from './styles';

class Home extends PureComponent {
    componentDidMount() {
        const { getAllUsers } = this.props;

        getAllUsers();
    }

    _renderSeparator = () => {
        return <View style={{ height: 1, backgroundColor: 'gray' }} />;
    }

    _renderError = () => {
        const { error } = this.props;

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.errorText}>
                    {error}
                </Text>
            </View>
        );
    }

    _renderUser = ({ item }) => {
        const { name, email } = item;

        return (
            <View style={styles.userCard}>
                <Text>
                    {name}
                </Text>

                <Text style={styles.userCardEmailText}>
                    {email}
                </Text>
            </View>
        );
    }

    render() {
        const { loading, error, users, getAllUsers } = this.props;

        if (error) return this._renderError();

        return (
            <FlatList
                refreshing={loading}
                onRefresh={getAllUsers}
                renderItem={this._renderUser}
                data={users}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={this._renderSeparator}
                contentContainerStyle={styles.listContainer}
            />
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
