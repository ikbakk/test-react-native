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
      flexDirection: "row",
      flex: 3,
    },

    img: {
      width: undefined,
      height: pHeight,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: "black",
      margin: 15,
      // resizeMode: "cover",
    },
  });

  const nav = useNavigation();
  return (
    // <Button
    //   buttonStyle={styles.button}
    //   containerStyle={{ paddingVertical: 5 }}
    //   onPress={() =>
    //     nav.navigate("CardDetail", {
    //       img: img,
    //       title: title,
    //       subtitle: subtitle,
    //       detail: detail,
    //       target: target,
    //     })
    //   }>
    //   <View
    //     style={{
    //       alignItems: "center",
    //     }}>
    //     <Image source={img} style={styles.img} />
    // <View
    //   style={{
    //     paddingTop: 10,
    //     flexDirection: "column",
    //     flex: 1,

    //     // width: tWidth ? tWidth : 180,
    //   }}>
    //       <Text style={{ fontSize: 22, color: "#ffffff" }}>{title}</Text>
    //       <Text style={{ fontSize: 16, color: "#ffffff" }}>{subtitle}</Text>
    //     </View>
    //   </View>
    // </Button>
    <Pressable>
      <Button buttonStyle={styles.button}>
        <View style={{ flex: 1 }}>
          <Image
            style={{
              width: undefined,
              height: pHeight,
              margin: 15,
              resizeMode: "cover",
            }}
            source={img}
          />
        </View>
        <View
          style={{
            paddingTop: 10,
            flexDirection: "column",
            flex: 1,
          }}>
          <Text style={{ fontSize: 22, color: "#ffffff" }}>{title}</Text>
          <Text style={{ fontSize: 16, color: "#ffffff" }}>{subtitle}</Text>
        </View>
      </Button>
    </Pressable>
  );
};
export default ColumnCard;
