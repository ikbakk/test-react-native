import React from "react";
import { Header, Icon } from "@rneui/themed";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

function SolidColorHeader({ title, color, target }) {
  const nav = useNavigation();
  const IconA = () => {
    return (
      <Pressable
        style={{
          backgroundColor: "#FFF0",
          width: 30,
          height: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          borderRadius: 20,
        }}
        onPress={() => nav.navigate("HomeAwal", { screen: target })}
        on>
        <Icon style={{ left: 8, top: 2 }} name="arrow-back-ios" />
      </Pressable>
    );
  };

  return (
    <Header
      statusBarProps={{ translucent: true, backgroundColor: "#0000004D" }}
      barStyle="dark-content"
      centerComponent={{
        text: title,
        style: {
          fontSize: 28,
        },
      }}
      containerStyle={{
        backgroundColor: color,
        height: 120,
      }}>
      <IconA />
    </Header>
  );
}

export default SolidColorHeader;
