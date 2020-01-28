import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextField = (props) => {
    return (
        <TextInput
            style={styles.container}
            maxLength={50}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#d7d7d7',
        paddingLeft: 20,
        marginVertical: 10
    }
});

export default TextField;
