import React from "react";

import { StyleSheet, View } from "react-native";

const LcdByte = ({ index, children }) => {
  return (
    <View style={{ marginBottom: index < 4 ? 2 : 0, ...styles.byteContainer }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  byteContainer: {
    flexDirection: "column",
    width: "25%",
    height: "50%",
    padding: 7,
  },
});

export default LcdByte;
