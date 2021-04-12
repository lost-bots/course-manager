import { StyleSheet } from "react-native";

export default StyleSheet.create({
  termSection: {
    marginTop: "10%",
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  inputSection: {
    backgroundColor: "lightgray",
    marginRight: 35,
    marginLeft: 15,
  },
  gradeSection: {
    backgroundColor: "lightblue",
    flex: 1,
  },
  courseSection: {
    backgroundColor: "pink",
    flex: 2,
  },
  creditSection: {
    backgroundColor: "lightgreen",
    flex: 1,
  },
  checkboxSection: {
    flex: 1,
    borderRadius: 50,
    height: 50,
    width: 50,
  },
});
