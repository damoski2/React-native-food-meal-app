import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SubTitle = ({ children }) => {
  const { subTitleContainer, subTitle } = styles;
  return (
    <View style={subTitleContainer}>
      <Text style={subTitle}>{children}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
  subTitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 12,
  },
});
