import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import { Text, Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const ColumnCard = ({
  img,
  color,
  title,
  subtitle,
  height,
  pWidth,
  pHeight,
  tWidth,
  detail,
  target,
}) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: `${color}`,
      height: height,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: "black",
      margin: 5,
    },

    img: {
      width: pWidth,
      height: pHeight,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: "black",
      margin: 15,
    },
    text: {
      marginLeft: 15,
      flex: 1,
    },
  });

  const nav = useNavigation();
  return (
    <Pressable
      onPress={() =>
        nav.navigate("CardDetail", {
          img: img,
          title: title,
          subtitle: subtitle,
          detail: detail,
          target: target,
        })
      }
      style={styles.button}>
      <Image style={styles.img} source={img} />
      <View style={styles.text}>
        <Text style={{ fontSize: 22, color: "#ffffff" }}>{title}</Text>
        <Text style={{ fontSize: 16, color: "#ffffff" }}>{subtitle}</Text>
      </View>
    </Pressable>
  );
};
export default ColumnCard;
