import React from "react";
import { View, Pressable, StyleSheet, Text, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ShadowComponent from "./ShadowComponent";

const CategoryGridTile = ({ title, color, onPress }) => {
  //const navigation = useNavigation()

  const { gridItem, innerContainer, button, titleStyle, buttonPressed } =
    styles;

  return (
   <ShadowComponent extraStyle={gridItem} >
      <Pressable
        style={({ pressed }) => [
          button,
          pressed && Platform.OS === "ios" && buttonPressed,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[innerContainer, { backgroundColor: color }]}>
          <Text style={titleStyle}>{title}</Text>
        </View>
      </Pressable> 
   </ShadowComponent>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    margin: 16,
    height: 150,
    borderRadius: 8,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
