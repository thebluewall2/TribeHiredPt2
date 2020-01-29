import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import TextField from '../../Components/TextField';
import Button from '../../Components/Button';

import Actions from '../../Redux/Actions';
import Selectors from '../../Redux/Selectors';

import styles from './styles';

class SignUp extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
        };
    }

    _onNameChanged = (name) => {
        this.setState({ name });
    }

    _onEmailChanged = (email) => {
        this.setState({ email });
    }

    _onPasswordChanged = (password) => {
        this.setState({ password });
    }

    _onSubmit = () => {
        const { signUp } = this.props;
        const { name, email, password } = this.state;

        signUp({
            name,
            email,
            password,
        });
    }

    render() {
        const { name, email, password } = this.state;
        const { loading, error } = this.props;

        return (
            <View style={styles.mainContainer}>
                <Text style={styles.titleText}>
                    Sign Up
                </Text>

                <View style={styles.textInputContainer}>
                    <TextField
                        placeholder='name'
                        autoCapitalize='words'
                        autoCorrect={false}
                        onChangeText={this._onNameChanged}
                        value={name}
                    />

                    <TextField
                        placeholder='email address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={this._onEmailChanged}
                        value={email}
                        keyboardType='email-address'
                    />

                    <TextField
                        placeholder='password'
                        onChangeText={this._onPasswordChanged}
                        value={password}
                        secureTextEntry
                    />
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.errorText}>
                        {error}
                    </Text>

                    <Button
                        title='Sign Up'
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
        loading: Selectors.getAuthSignUpAttempting(state),
        error: Selectors.getAuthSignUpError(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (user) =>
            dispatch(Actions.authSignUpAttempt(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
