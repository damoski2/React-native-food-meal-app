import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

import MealItem from './MealItem';

const MealsList = ({items}) => {

    const { container } = styles;

    const renderMealItem = ({ item }) => {
        const mealItemProps = {
          id: item.id,
          title: item.title,
          imageUrl: item.imageUrl,
          affordability: item.affordability,
          complexity: item.complexity,
          duration: item.duration,
        };
        return <MealItem {...mealItemProps} />;
      };
    
        return (
            <View style={container}>
              <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
              />
            </View>
          );
    
}

export default MealsList


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });
  
