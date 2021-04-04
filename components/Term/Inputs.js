import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';

let courseObj = {};

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

    //setting the useState variables
    let setCourseArr = (c) => {
        setCourse(c);
    }
    let setCreditArr = (c) => {
        setCredit(c);
    }
    return (
        <View style={styles.termSection}>
            <View>
                <Text style={styles.inputSection}> Term # </Text>
            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.courseSection}> Course </Text>
                <Text style={styles.gradeSection}> Grade </Text>
                <Text style={styles.creditSection}> Credit </Text>
            </View >

            <View style={styles.rowContainer}>
                <TextInput
                    style={styles.courseSection}
                    onChangeText={setCourseArr}
                    onEndEditing={() => { courseObj.course = course }}
                    value={course}
                />
                <View style={styles.gradeSection}>
                    <RNPickerSelect
                        onValueChange={(input) => { courseObj.grade = input }}
                        items={gradeScale}
                    />
                </View>
                <TextInput
                    style={styles.creditSection}
                    onChangeText={setCreditArr}
                    onEndEditing={() => { courseObj.credit = credit }}
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
    inputSection: {
        backgroundColor: 'lightgray',
        marginRight: 35,
        marginLeft: 15,
    },
    gradeSection: {
        backgroundColor: 'lightblue',
        flex: 1,

    },
    courseSection: {
        backgroundColor: 'pink',
        flex: 2,
    },
    creditSection: {
        backgroundColor: 'lightgreen',
        flex: 1,

    },
    checkboxSection: {
        backgroundColor: 'white',
        flex: 1,
    }

})