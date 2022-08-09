import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text>suds</Text>
      </Pressable>
      <Text>sussy baka</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aef",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#aba",
    width: 80,
    alignItems: "center",
  },
});
