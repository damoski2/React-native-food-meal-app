import React, { useContext } from "react";
import { useSelector } from 'react-redux'
import { StyleSheet, View, Text } from "react-native";
import { FavoriteContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";



const FavoritesScreen = () => {
  const { rootContainer, text } = styles;

  const favoriteMealIds = useSelector((state)=> state.favoriteMeals.ids)
  //const { ids } = useContext(FavoriteContext);

  const favoriteMeals = MEALS.filter((mealItem) => favoriteMealIds.includes(mealItem.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={rootContainer}>
        <Text style={text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
