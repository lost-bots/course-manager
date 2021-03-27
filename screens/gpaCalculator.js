import React, {useState} from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function GpaCalculator({ navigation, route }) {
    //console.log(navigation);
    // console.log('sss');
    // console.log(route);
    const [gpa, setGpa] = useState(0);
    const addCourse = () => {
        console.log('reached the add course button');
    }
    // we need to figure out how to update the GPA everytime a user enters the grade for a row
            // --> 'enter' eventlistener could be one option or a button could be another option
    
    //we need to figure out how to render the row everytime the user is done entering the data for the row they are in 
    return (
        <View>
            <View style={styles.termSection}>
                <Text style={styles.textSection}> Term # </Text>
            </View>
            <View style={styles.rowContainer}>
                <View style={styles.section}>
                    <Text style={styles.textSection}> Course </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.textSection}> Grade </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.textSection}> Credit </Text>
                </View>
            </View>
            <Button
                title="Add Course"
                onPress={addCourse }
            />

            <View>
                <Text> { gpa}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    termSection: {
        marginTop: 12,
        backgroundColor: 'gray',
        height: '10%',
        width: '20%',
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    section: {
        backgroundColor: 'skyblue',
        marginTop: 35,
        padding: 24,
        marginRight: 20,
    },
    textSection: {
        fontSize: 13,
    }
})