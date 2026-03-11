import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { Button } from "react-native";

export default function App() {
  console.log(useDeviceOrientation());

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View
          style={{ width: "50%", height: 1400, backgroundColor: "red" }}
        ></View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "#000", fontSize: 18 },
  image: { width: 200, height: 200, marginTop: 20 },
});
