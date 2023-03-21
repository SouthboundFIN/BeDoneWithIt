import React, { Component } from 'react';
// import type { Node } from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Text
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
        //this.submitToDo = this.submitToDo.bind(this);
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
                <ToDoList toDoItems={toDoItems}/>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#121212'
    },
    content: {
        flex: 1,
        paddingTop: 60
    },
    mainview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default App;