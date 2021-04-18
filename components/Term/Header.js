import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./Style";

export default function Header() {
  return (
    <>
      <View>
        <Text style={styles.inputSection}> Term # </Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.courseSection}> Course </Text>
        <Text style={styles.gradeSection}> Grade </Text>
        <Text style={styles.creditSection}> Credit </Text>
        <Text style={styles.checkboxSection}></Text>
      </View>
    </>
  );
}
