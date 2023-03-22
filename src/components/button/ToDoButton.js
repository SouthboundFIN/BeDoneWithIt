import React from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";

const ToDoButton = ({ onPress, complete, name }) => (
    <TouchableHighlight
        onPress={onPress}
        style={[styles.button, complete ? styles.complete: null]}

        >
        <Text style={[
            styles.text,
            //complete ? styles.complete: null,
            name === 'Delete' ? styles.deleteButton: null
        ]}>{name}
        </Text>
    </TouchableHighlight>
)

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
        padding: 7,
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 5,
        backgroundColor: '#222'
    },
    complete: {
        fontWeight: 'bold',
        backgroundColor: 'green',
        
    },
    deleteButton: {
        color: 'rgba(175, 47, 47, 1)'
    }

});

export default ToDoButton;