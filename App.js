import React, { Component } from 'react';
// import type { Node } from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Text
} from 'react-native';


class App extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: '',
            todos: [],
            type: 'All'
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps='always'
                    style={styles.content}>
                    <View style={styles.mainview}>
                        <Text>Be Done With It</Text>
                    </View>
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