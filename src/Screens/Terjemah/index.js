import React from "react";
import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";
import SolidColorHeader from "../../components/SolidColorHeader";

function Terjemah() {
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
    <View>
      <SolidColorHeader title="Terjemahan" color="#93D564" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        style={styles.scrollView}>
        <Text style={styles.titleApp}>{`Mari Belajar\nMuatan Lokal!`}</Text>
      </ScrollView>
    </View>
  );
}
export default Terjemah;
