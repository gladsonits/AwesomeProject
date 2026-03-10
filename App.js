import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "react-native";

export default function App() {
  const handleTextClick = () => console.log("Text clicked");

  const handlButtonClick = () =>
    Alert.alert("Hey you!", "You have clicked the button!", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text} onPress={() => console.log("Text clicked")}>
          Open up App.js to start working on your app!
        </Text>
        <Image source={require("./assets/icon.png")} style={styles.image} />
        <Text style={styles.text} onPress={handleTextClick}>
          Another Image from Picsum
        </Text>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={styles.image}
          blurRadius={0.6}
          fadeDuration={2000}
        />
        <Text
          style={styles.text}
          onPress={() => console.log("Bluebox clicked")}
        >
          A blue box
        </Text>
        <TouchableOpacity onPress={() => console.log("bluebox view clicked")}>
          <View
            style={{ backgroundColor: "dodgerblue", width: 200, height: 200 }}
          ></View>
        </TouchableOpacity>
        <Button
          title="Click Me"
          accessibilityLabel="Press me"
          color="#c7e06a"
          onPress={() => handlButtonClick()}
        />
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
