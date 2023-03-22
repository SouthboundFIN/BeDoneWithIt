// Heading.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Heading = () => (
    <View style={styles.header}>
        <Text style={styles.headerText}>
            beDONEWITHit
        </Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        //marginTop: 0
    },
    headerText: {
        textAlign: 'center',
        fontSize: 42,
        //color: 'rgba(175,47,47,0.25)',
        fontWeight: '500'
    }
});

export default Heading;