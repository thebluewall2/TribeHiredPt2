import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = (props) => {
    return (
        <TextInput
            style={styles.searchBar}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    searchBar: {
        borderRadius: 25,
        height: 45,
        borderWidth: 1,
        borderColor: '#d7d7d7',
        paddingLeft: 20,
        marginBottom: 10,
    },
});

export default SearchBar;
