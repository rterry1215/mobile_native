import React from "react";
import {
  View,
} from "react-native";
import SearchBar from "./components/Search";
import FoodSlider from "./components/FoodSlider";

const Food = () => {
    return(
        <View>
            <SearchBar />
            <FoodSlider />
        </View>
    )
}
export default Food;