import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

const Button = (props) => {
    const { onPress, loading, title } = props;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
            disabled={loading}
        >
            {renderTitle(loading, title)}
        </TouchableOpacity>
    );
};

const renderTitle = (loading, title) => {
    if (loading) {
        return (
            <ActivityIndicator
                color='black'
            />
        );
    }

    return (
        <Text style={styles.title}>
            {title}
        </Text>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFD200',
        width: 120,
        height: 47,
        borderRadius: 47 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold'
    }
});

export default Button;
