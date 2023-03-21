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
        width: 160,
        marginHorizontal: 20,
        marginTop: 20,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submit: {
        fontWeight: '400'
    }
});

export default Button;