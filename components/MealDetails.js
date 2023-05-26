import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  const { details, detailItem } = styles;

  return (
    <View style={[details, style]}>
      <Text style={[detailItem, textStyle]}>{duration}m</Text>
      <Text style={[detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
