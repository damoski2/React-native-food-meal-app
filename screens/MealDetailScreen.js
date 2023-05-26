import React, { useLayoutEffect, useContext } from "react";
import { View, StyleSheet, Text, Image, ScrollView, Button } from "react-native";
import { useSelector, useDispatch } from 'react-redux'


import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { addFavorite, removeFavorite } from '../store/redux/favorite'
//import { FavoriteContext } from '../store/context/favorites-context'

const MealDetailScreen = ({ route, navigation }) => {
  const {
    image,
    title,
    detailText,
    listContainer,
    listOuterContainer,
    rootContainer,
  } = styles;

  //const { ids, removeFavorite, addFavorite } = useContext(FavoriteContext);

  const favoriteMealIds = useSelector((state)=> state.favoriteMeals.ids)
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealIds.includes(mealId)

  const changeFavoriteStateHandler = ()=>{
    if(mealIsFavorite){
      dispatch(removeFavorite({id: mealId}))
    }else{
      dispatch(addFavorite({id: mealId}))
    }
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight: ()=>{
            return <IconButton icon={mealIsFavorite ? 'star':'star-outline'} color="white" onPress={changeFavoriteStateHandler} />
          }
    })
  },[navigation, changeFavoriteStateHandler])

  return (
    <ScrollView style={rootContainer}>
      <Image style={image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={detailText}
      />
      <View style={listOuterContainer}>
        <View style={listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
