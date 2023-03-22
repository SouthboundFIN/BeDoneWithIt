import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';


import Heading from './src/components/heading/Heading';
import Input from './src/components/input/Input';
import Button from './src/components/button/Button';
import ToDoList from './src/components/todolist/ToDoList';

// global toDoIndex
let toDoIndex = 0;

class App extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: '',
            toDoItems: [],
            type: 'All'
        }
    }
    inputChange(inputValue) {
        //console.log(`input value change ${inputValue}`);
        this.setState({ inputValue });
    }
    submitToDo = () => {
        if (this.state.inputValue.match(/^\s*$/)) {
            return;
        }
        const toDoItem = {
            title: this.state.inputValue,
            toDoIndex,
            complete: false
        }
        toDoIndex++;
        const toDoItems = [...this.state.toDoItems, toDoItem];
        this.setState({ toDoItems, inputValue: '' }, () => {
            console.log(`State set to ${JSON.stringify(this.state)}`);
        })
    }
    toggleComplete = (idx) => {
        let toDoItems = this.state.toDoItems;
        toDoItems.forEach((toDoItem) => {
            if (toDoItem.toDoIndex === idx) {
                toDoItem.complete = !toDoItem.complete;
            }
        })
        this.setState({ toDoItems });
    }
    deleteToDoItem = (idx) => {
        let { toDoItems } = this.state;
        toDoItems = toDoItems.filter((toDoItem) => toDoItem.toDoIndex !== idx);
        this.setState({ toDoItems });
    }
    render() {
        const { inputValue, toDoItems } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps='always'
                    style={styles.content}>
                    <Heading />
                    <Input
                        inputValue={inputValue}
                        inputChange={(text) => this.inputChange(text)}
                    />
                    <Button submitToDo={this.submitToDo} />
                    <ToDoList
                        toDoItems={toDoItems}
                        toggleComplete={this.toggleComplete}
                        deleteToDoItem={this.deleteToDoItem}
                    />
                    <View style={styles.footer} />

                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    content: {
        paddingVertical: 40,
    },
    mainview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        marginBottom: 50
    }
});


export default App;