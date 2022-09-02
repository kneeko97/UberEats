import { View, Text, StyleSheet, FlatList } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import BasketDishItem from "../../components/BasketDishItem";

const restaurant = restaurants[0];

const Basket = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}> {restaurant.name} </Text>
      <Text style={styles.subtitle}> Your Items </Text>

      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDishItem={item} />}
      />

      <View style={styles.separator}></View>

      <View style={styles.button}>
        <Text style={styles.buttonText}> Create Order </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40, // Temporary Fix
    padding: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },
  subtitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 19,
    marginTop: 15,
    marginBottom: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },
  price: {
    marginLeft: "auto",
    fontSize: 17,
  },
  quantity: {
    fontSize: 16,
  },
  quantityContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    marginLeft: 5,
    borderRadius: 3,
  },
  dishName: {
    fontWeight: "bold",
    fontSize: 17,
    letterSpacing: 0.5,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
});

export default Basket;
