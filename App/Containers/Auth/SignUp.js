import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import TextField from '../../Components/TextField';
import Button from '../../Components/Button';

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
        console.log(this.state);
    }

    render() {
        const { name, email, password } = this.state;
        const { loading } = this.props;

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

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);