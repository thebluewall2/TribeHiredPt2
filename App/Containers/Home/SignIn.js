import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import TextField from '../../Components/TextField';
import Button from '../../Components/Button';

import Actions from '../../Redux/Actions';
import Selectors from '../../Redux/Selectors';

import styles from './styles';

class SignIn extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    _onEmailChanged = (email) => {
        this.setState({ email });
    }

    _onPasswordChanged = (password) => {
        this.setState({ password });
    }

    _onSubmit = () => {
        const { login } = this.props;
        const { email, password } = this.state;

        login(email, password);
    }

    render() {
        const { email, password } = this.state;
        const { loading, error } = this.props;

        return (
            <View style={styles.mainContainer}>
                <Text style={styles.loginTitleStyle}>Login screen</Text>

                <View style={styles.textInputContainer}>
                    <TextField
                        placeholder='example@example.com'
                        autoCapitalize='none'
                        autoCorrect={false}
                        autoFocus
                        onChangeText={this._onEmailChanged}
                        value={email}
                    />

                    <TextField
                        placeholder='password'
                        secureTextEntry
                        onChangeText={this._onPasswordChanged}
                        value={password}
                    />
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.errorText}>
                        {error}
                    </Text>

                    <Button
                        title='Login'
                        onPress={this._onSubmit}
                        loading={loading}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: Selectors.getAuthLoginAttempting(state),
        error: Selectors.getAuthLoginError(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) =>
            dispatch(Actions.authLoginAttempt(email, password)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
