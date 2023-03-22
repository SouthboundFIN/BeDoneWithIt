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
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 }
    },
    input: {
        fontSize: 16,
        height: 60,
        backgroundColor: '#222',
        paddingLeft: 10,
        paddingRight: 10,
    }
});

export default Input;
