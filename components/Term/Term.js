import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import styles from "./Style";
import Header from "./Header";
import Input from "./Input";

let courseArray = [];
let key = 0;
const Term = () => {
  const [courses, setCourses] = useState([]);

  function setDiv() {
    console.log(courses);

    // setCourses([...courses, <Input />]) //array destructring
    let newCourseArray = [...courses];
    newCourseArray.push(<Input key={key++} />);
    setCourses(newCourseArray);
  }
  return (
    <View style={styles.termSection}>
      <Header />

      <View>
        {courses}
      </View>
      <Button title="Add Course" onPress={setDiv} />

      <Button
        title="show"
        onPress={() => {
          console.log();
        }}
      />
    </View>
  );
};

export default Term;
