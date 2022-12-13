import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { listBudaya } from "../../Util/ListBudaya";

import ColumnCard from "../ColumnCard";
import ContentTitle from "../ContentTitle";

const BudayaSection = () => {
  const styles = StyleSheet.create({
    sectionContainerColumn: {
      flexDirection: "column",
      paddingBottom: 30,
    },
  });

  const first3 = listBudaya.slice(0, 3);

  return (
    <View style={styles.sectionContainerColumn}>
      <ContentTitle screen={"Budaya"} judul={"Budaya dan Adat"} />
      <ScrollView
        style={{ paddingLeft: 20 }}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {first3.map((item, id) => {
          return (
            <ColumnCard
              key={id}
              title={item.title}
              subtitle={item.subtitle}
              img={item.img}
              color={item.color}
              height={180}
              pHeight={90}
              pWidth={180}
              detail={item.detail}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default BudayaSection;
