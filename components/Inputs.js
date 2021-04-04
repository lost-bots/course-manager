import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';

let course = new Array();

export default function Input() {

    const gradeScale = [
        { label: 'A+', value: 4.0 },
        { label: 'A', value: 4.00 },
        { label: 'A-', value: 3.70 },
        { label: 'B+', value: 3.30 },
        { label: 'B', value: 3.00 },
        { label: 'B-', value: 2.70 },
        { label: 'C+', value: 2.30 },
        { label: 'C', value: 2.00 },
        { label: 'C-', value: 1.70 },
        { label: 'D+', value: 1.30 },
        { label: 'D', value: 1.00 },
        { label: 'F', value: 0.00 },
    ];
    let [course, setCourse] = useState('');
    let [credit, setCredit] = useState('');
    let [grade, setGrade] = useState(''); //ignore that grade, still being used. 

    let setCreditArr = (c) => {
        setCredit(c);
    }
    let setCourseArr = (c) => {
        setCourse(c);
    }
    let setGradeArr = (v) => {
        setGrade(v);
    }
    return (
        <View style={styles.termSection}>
            <View>
                <Text style={styles.inputSection}> Term # </Text>
            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.section}>Course </Text>
                <Text style={styles.section}> Grade </Text>
                <Text style={styles.section}> Credit </Text>
            </View >

            <View style={styles.rowContainer}>
                <TextInput
                    style={styles.section}
                    onChangeText={setCourseArr}
                    value={course}
                />
                <View style={styles.section}>
                    <RNPickerSelect
                        onValueChange={setGradeArr}
                        items={gradeScale}
                    />
                </View>
                <TextInput
                    style={styles.section}
                    onChangeText={setCreditArr}
                    value={credit}
                />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({

    termSection: {
        marginTop: '10%',
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bodyRowContainer: {
        marginTop: 34,
        flexDirection: 'row',
    },
    inputSection: {
        backgroundColor: 'lightgray',
        marginRight: 35,
        marginLeft: 15,
    },
    section: {
        backgroundColor: 'lightblue',
        flex: 1,

    }

})