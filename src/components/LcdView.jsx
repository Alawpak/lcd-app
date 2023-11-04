import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";

import { INIT_BYTE_ARRAY } from "../commons/constants/constants";
import { theme } from "../theme/theme";

import LcdByte from "./LcdByte";
import LcdBits from "./LcdBits";
import LcdBit from "./LcdBit";

const LcdView = () => {
  const [bytes, setBytes] = useState([...INIT_BYTE_ARRAY]);

  const handleBit = (byteIndex, rowIndex, columnIndex, bit) => {
    let newBytes = [...bytes];
    bit = parseInt(bit);
    bit = bit === 0 ? 1 : 0;

    newBytes[byteIndex][rowIndex][columnIndex] = String(bit);
    setBytes([...newBytes]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.lcdContainer}>
        <ReactNativeZoomableView
          maxZoom={4}
          minZoom={1}
          zoomStep={1}
          bindToBorders={true}
          onZoomAfter={this.logOutZoomState}
          style={styles.zoomableView}
        >
          {bytes.map((byte, byteIndex) => (
            <LcdByte key={byteIndex} index={byteIndex}>
              {byte.map((bits, rowIndex) => (
                <LcdBits key={rowIndex}>
                  {bits.map((bit, columnIndex) => (
                    <LcdBit
                      key={columnIndex}
                      {...{ bit, byteIndex, rowIndex, columnIndex, handleBit }}
                    />
                  ))}
                </LcdBits>
              ))}
            </LcdByte>
          ))}
        </ReactNativeZoomableView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    paddingHorizontal: 10,
  },
  lcdContainer: {
    flex: 0.5,
    flexDirection: "row",
    borderColor: theme.colors.black,
    borderWidth: 10,
    borderRadius: 10,
  },
  zoomableView: {
    flexDirection: "row",
    flex: 1,
    width: "100%",
    flexWrap: "wrap",
    backgroundColor: theme.colors.blue,
  },
});

export default LcdView;
