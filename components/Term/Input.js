import React, { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import RNPickerSelect from "react-native-picker-select";
import { Checkbox } from "react-native-paper";
import styles from "./Style";
import GradeScale from "../../static/gradeData";

let courseObj = {};

export default function Input() {
  const [course, setCourse] = useState("");
  const [credit, setCredit] = useState("");
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.rowContainer}>
      <TextInput
        style={styles.courseSection}
        onChangeText={(input) => setCourse(input)}
        onEndEditing={() => {
          courseObj.course = course;
        }}
        value={course}
      />
      <View style={styles.gradeSection}>
        <RNPickerSelect
          onValueChange={(input) => {
            courseObj.grade = input;
          }}
          items={GradeScale}
        />
      </View>
      <TextInput
        style={styles.creditSection}
        onChangeText={(input) => {
          setCredit(input);
          courseObj.credit = credit;
        }}
        value={credit}
      />
      <View style={styles.checkboxSection}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
            courseObj.isChecked = !checked;
          }}
        />
      </View>
    </View>
  );
}
