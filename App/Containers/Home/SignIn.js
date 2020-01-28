import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import TextField from '../../Components/TextField';
import Button from '../../Components/Button';

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
        console.log(this.state);
    }

    render() {
        const { email, password } = this.state;

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
                    <Button
                        title='Login'
                        onPress={this._onSubmit}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
