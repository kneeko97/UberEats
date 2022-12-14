import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OrderListItem = ({ order }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("Order", { id: order.id })}
      style={styles.page}
    >
      <Image
        source={{ uri: order.Restaurant.image }}
        style={styles.restImage}
      />

      <View>
        <Text style={styles.name}>{order.Restaurant.name}</Text>
        <Text style={styles.quantity}> 3 items &#8226; $38.45 </Text>
        <Text> 2 days ago &#8226; {order.status}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  restImage: {
    width: 75,
    height: 75,
    marginRight: 5,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
  },
  quantity: {
    marginVertical: 5,
  },
});

export default OrderListItem;
