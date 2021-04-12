import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import styles from "./Style";
import Header from "./Header";
import Input from "./Input";

let courseArray = [];

const Term = () => {
  const [courses, setCourses] = useState([]);

  function setDiv() {
    let c = (
      <View>
        <Text> hii </Text>
      </View>
    );
    console.log(courses.push(courses.props.children));
    console.log("hhuuuu");
    setCourses(c);
  }
  return (
    <View style={styles.termSection}>
      <Header />

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
