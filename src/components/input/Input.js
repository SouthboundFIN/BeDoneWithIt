// Input.js

import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = ({inputValue, inputChange}) => (
    <View style={styles.inputContainer}>
        <TextInput
            value={inputValue}
            style={styles.input}
            placeholder="Type task here"
            //placeholderTextColor='#cacaca'
            onChangeText={inputChange}>
        </TextInput>
    </View>
);

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 20,
        marginTop: 30,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2 }
    },
    input: {
        height: 60,
        backgroundColor: '#555',
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default Input;
