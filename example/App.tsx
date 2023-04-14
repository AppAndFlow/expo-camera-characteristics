import { StyleSheet, Text, View } from "react-native";

import * as ExpoCameraCharacteristics from "expo-camera-characteristics";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Focal Length: {ExpoCameraCharacteristics.getFocalLength()}</Text>
      <Text>Sensor height: {ExpoCameraCharacteristics.getSensorHeight()}</Text>
      <Text>Sensor Width: {ExpoCameraCharacteristics.getSensorWidth()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
