import { View, Text, StyleSheet, FlatList } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";

const restaurant = restaurants[0];
const BasketDishItem = ({ basketDishItem }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantity}>1</Text>
      </View>
      <Text style={styles.dishName}> {basketDishItem.name}</Text>
      <Text style={styles.price}> ${basketDishItem.price} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },
  quantityContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    marginLeft: 15,
    borderRadius: 3,
  },
  dishName: {
    fontWeight: "bold",
    fontSize: 17,
    letterSpacing: 0.5,
  },
  price: {
    marginLeft: "auto",
    fontSize: 17,
  },
});

export default BasketDishItem;
