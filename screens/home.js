import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import GpaCalculator from './gpaCalculator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Home({ navigation }) {
    const onPressGpaCalcualtorButton = () => {
        navigation.navigate('GpaCalculator')
    }
    const onPressCoursePlannerButton = () => {
        navigation.navigate('CoursePlanner')
    }

    return (
        <View style={styles.section}>
            <View style={styles.sectionButton}>
                <Button
                    onPress={onPressGpaCalcualtorButton}
                    title="GPA Calculator"
                />
            </View>
            <View style={styles.sectionButton}>
                <Button
                    onPress={onPressCoursePlannerButton}
                    title="Course Planner"
                />
            </View >
        </View >
    );
}

const styles = StyleSheet.create({
    section: {
        marginTop: 35,
        padding: 24,
    },
    sectionButton: {
        backgroundColor: 'skyblue',
        fontSize: 13,
        marginBottom: 12,
    }
})