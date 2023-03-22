// Button.js

import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const Button = ({submitToDo}) => ( 
    <View style={styles.buttonContainer}>
        <TouchableHighlight style={styles.button} onPress={submitToDo}>
            <Text style={styles.submit}>
                Add item
            </Text>
        </TouchableHighlight>
    </View>
);

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center'
    },
    button: {
        height: 50,
        paddingHorizontal: 20,
        width: 200,
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#222',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#343'
    },
    submit: {
        fontSize: 17,
        fontWeight: '400'
    }
});

export default Button;