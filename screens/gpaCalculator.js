import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function GpaCalculator({navigation,route}) {
    return (
        <View style={styles.section}>
            <Text style={styles.textSection}> This is {route.params.name}'s profile </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        backgroundColor: 'skyblue',
        marginTop: 35,
        padding: 24,
    },
    textSection: {
        fontSize: 13,
    }
})