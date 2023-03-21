// ToDoItem.js

import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const ToDoItem = ({toDoItem}) => (
    <View style={styles.toDoItemContainer}>
        <Text style={styles.toDoItemText}>
            {toDoItem.title}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    toDoItemContainer: {
        marginHorizontal: 20,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        paddingLeft: 14,
        paddingVertical: 7,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2},
        flexDirection: 'row',
        alignItems: 'center'
    },
    toDoItemText: {
        fontSize: 16
    }
});

export default ToDoItem;