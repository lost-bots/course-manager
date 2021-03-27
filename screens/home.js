import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import GpaCalculator from './gpaCalculator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Home({navigation}) {
    const onPressButton = () => {
        navigation.navigate('GpaCalculator')
    }

    return (
        <View style={styles.section}>
            <Button
                onPress={onPressButton}
                title="GPA Calculator"
            />
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