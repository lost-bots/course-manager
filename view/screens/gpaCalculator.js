import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import Term from "../../components/Term/Term";

export default function GpaCalculator({ navigation, route }) {
  return <Term />;
}

// return (
//   <View>
//     <ScrollView>
//       <View style={styles.termSection}>
//         <Text style={styles.textSection}> Term # </Text>
//       </View>
//       <View style={styles.headerRowContainer}>
//         <View style={styles.section}>
//           <Text style={styles.textSection}> Course </Text>
//         </View>
//         <View style={styles.section}>
//           <Text style={styles.textSection}> Grade </Text>
//         </View>
//         <View style={styles.section}>
//           <Text style={styles.textSection}> Credit </Text>
//         </View>
//       </View>
//       {/* <Button
//               title="Add Course"
//               onPress={addCourse }
//           /> */}
//       <View style={styles.bodyRowContainer}>
//         <TextInput
//           style={styles.inputSection}
//           onChangeText={(text) => setCourse(text)}
//           value={course}
//         />
//         <Picker
//           style={styles.scrollSection}
//           selectedValue={grade}
//           onValueChange={(itemValue, itemIndex) =>
//             setGrade(itemValue)
//           }>
//           <Picker.Item label="-" value="grade" />
//           <Picker.Item label="A+" value="grade" />
//           <Picker.Item label="A" value="grade" />
//         </Picker>
//         <TextInput
//           style={styles.inputSection}
//           onChangeText={(text) => setCredit(text)}
//           value={credit}
//         //   keyboardType="numeric"
//         />
//       </View>
//     </ScrollView>
//   </View>
// );
