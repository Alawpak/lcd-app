import React from "react";

import { StyleSheet, View } from "react-native";

const LcdBits = ({ children }) => {
  return <View style={styles.bitsContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  bitsContainer: {
    flexDirection: "row",
    columnGap: 1,
    height: "12.5%",
    flex: 1,
    paddingVertical: 1,
  },
});

export default LcdBits;
