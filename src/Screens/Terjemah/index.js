import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "@rneui/themed";

import SolidColorHeader from "../../components/SolidColorHeader";

function Terjemah({ color }) {
  const styles = StyleSheet.create({
    scrollView: {
      paddingTop: 20,
      paddingHorizontal: 15,
      marginBottom: 50,
      borderColor: "black",
      borderWidth: 1,
    },
  });

  return (
    <View style={{ flex: 1 }}>
      <SolidColorHeader title="Terjemahan" color="#93D564" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        style={styles.scrollView}>
        <Text style={styles.titleApp}>{color}</Text>
      </ScrollView>
    </View>
  );
}
export default Terjemah;
