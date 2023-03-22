// ToDoItem.js

import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import ToDoButton from '../button/ToDoButton';

const ToDoItem = ({toDoItem, toggleComplete, deleteToDoItem}) => (
    <View style={styles.toDoItemContainer}>
        <Text style={styles.toDoItemText}>
            {toDoItem.title}
        </Text>
        <View style={styles.buttons}>
            <ToDoButton 
            name='Done'
            complete={toDoItem.complete}
            onPress={() => toggleComplete(toDoItem.toDoIndex)}/>
            <ToDoButton
            name='Delete'
            onPress={() => deleteToDoItem(toDoItem.toDoIndex)}/>
        </View>
    </View>
);

const styles = StyleSheet.create({
    toDoItemContainer: {
        backgroundColor: '#444',
        marginHorizontal: 20,
        //borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#555',
        marginVertical: 2,
        paddingVertical: 7,
        paddingLeft: 14,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2},
        flexDirection: 'row',
        alignItems: 'center'

    },
    toDoItemText: {
        fontSize: 17,
        flex: 1,
        flexWrap: 'wrap'
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});

export default ToDoItem;