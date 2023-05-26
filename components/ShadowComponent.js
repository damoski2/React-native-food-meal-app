import React from "react";
import { View, StyleSheet, Platform } from "react-native";

const ShadowComponent = ({ children, extraStyle }) => {
  const { shadowContainer } = styles;

  return <View style={[shadowContainer,extraStyle]}>{children}</View>;
};

export default ShadowComponent;

const styles = StyleSheet.create({
  shadowContainer: {
    flex: 1,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
    backgroundColor: "white",
   
  /*   margin: 16,
    height: 150,
    borderRadius: 8, */
  },
});
