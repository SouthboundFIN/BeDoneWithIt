// ToDoList.js

import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import ToDoItem from './ToDoItem';

const ToDoList = ({toDoItems, toggleComplete, deleteToDoItem}) => {
    toDoItems = toDoItems.map((toDoItem, i) => {
        return (
            <ToDoItem
             
            key={toDoItem.toDoIndex} 
            toDoItem={toDoItem} 
            toggleComplete={toggleComplete}
            deleteToDoItem={deleteToDoItem}
            />

        )
    });
    return <View>{toDoItems}</View>;
};

// const styles = StyleSheet.create({
// });

export default ToDoList;