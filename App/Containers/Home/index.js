import React, { PureComponent } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';

import SearchBar from '../../Components/SearchBar';

import Actions from '../../Redux/Actions';
import Selectors from '../../Redux/Selectors';

import styles from './styles';

class Home extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
        };
    }

    componentDidMount() {
        const { getAllUsers } = this.props;

        getAllUsers();
    }

    _setSearchQuery = (search) => {
        this.setState({ search });
    }

    _getUsers = () => {
        const { search } = this.state;

        let results = this.props.users;

        if (search.length) {
            //if user has typed in a search query
            const searchQuery = search.toUpperCase();

            results = results.filter(user => {
                const { name, email } = user;

                const userData = `${name.toUpperCase()} ${email.toUpperCase()}`;

                return userData.indexOf(searchQuery) > -1;
            });
        }

        return results;
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

    _renderSearchBar = () => {
        const { search } = this.state;

        return (
            <SearchBar
                placeholder='search'
                onChangeText={this._setSearchQuery}
                value={search}
            />
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
        const { loading, error, getAllUsers } = this.props;

        if (error) return this._renderError();

        const users = this._getUsers();

        return (
            <FlatList
                refreshing={loading}
                onRefresh={getAllUsers}
                renderItem={this._renderUser}
                data={users}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={this._renderSeparator}
                contentContainerStyle={styles.listContainer}
                ListHeaderComponent={this._renderSearchBar}
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
