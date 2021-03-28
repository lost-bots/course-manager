import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';

export default function GpaCalculator({ navigation, route }) {

  let [course, setCourse] = useState('');
  let [credit, setCredit] = useState('');
  let [grade, setGrade] = useState('');

  return (
    <View>
      <ScrollView>
        <View style={styles.termSection}>
          <Text style={styles.textSection}> Term # </Text>
        </View>
        <View style={styles.headerRowContainer}>
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
        {/* <Button
                title="Add Course"
                onPress={addCourse }
            /> */}
        <View style={styles.bodyRowContainer}>
          <TextInput
            style={styles.inputSection}
            onChangeText={(text) => setCourse(text)}
            value={course}
          />
          <Picker
            style={styles.scrollSection}
            selectedValue={grade}
            onValueChange={(itemValue, itemIndex) =>
              setGrade(itemValue)
            }>
            <Picker.Item label="-" value="grade" />
            <Picker.Item label="A+" value="grade" />
            <Picker.Item label="A" value="grade" />
            <Picker.Item label="A-" value="grade" />
            <Picker.Item label="B+" value="grade" />
            <Picker.Item label="B" value="grade" />
            <Picker.Item label="B-" value="grade" />
            <Picker.Item label="C+" value="grade" />
            <Picker.Item label="C" value="grade" />
            <Picker.Item label="C-" value="grade" />
            <Picker.Item label="D+" value="grade" />
            <Picker.Item label="D" value="grade" />
            <Picker.Item label="D-" value="grade" />
            <Picker.Item label="F" value="grade" />
          </Picker>
          <TextInput
            style={styles.inputSection}
            onChangeText={(text) => setCredit(text)}
            value={credit}
          //   keyboardType="numeric"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  termSection: {
    marginTop: 12,
    height: '10%',
    width: '20%',
  },
  headerRowContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  bodyRowContainer: {
    marginTop: 34,

  },
  inputSection: {

    backgroundColor: 'lightgray',
    height: '20%'
  },
  scrollSection: {
    marginTop: 30,
    backgroundColor: 'lightyellow',
    height: '50%',
    width: '50%'
  },
  section: {
    backgroundColor: 'lightblue',
    marginRight: 30,
  }

})