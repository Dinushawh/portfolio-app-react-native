import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 300,
          height: 300,
        }}
        source={require("./assets/1693930188537.jpeg")}
      />
      <Text style={styles.Text}>HELLO!</Text>
      <Text style={styles.Text1}>
        I'm Dinusha<Text style={styles.Text2}> Weerakoon</Text>
      </Text>
      <Text style={styles.Text3}>
        {"<"}Full stack developer{"/>"}
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={styles.text}>About Me</Text>
      </Pressable>

      <View style={styles.flexx}>
        <Image
          style={{ width: 30, height: 30, borderRadius: 10, margin: 20 }}
          source={require("./assets/icons8-github-50.png")}
        />
        <Image
          style={{ width: 30, height: 30, borderRadius: 10, margin: 20 }}
          source={require("./assets/icons8-google-50.png")}
        />
        <Image
          style={{ width: 30, height: 30, borderRadius: 10, margin: 20 }}
          source={require("./assets/icons8-linkedin-circled-50.png")}
        />
        <Image
          style={{ width: 30, height: 30, borderRadius: 10, margin: 20 }}
          source={require("./assets/icons8-whatsapp-50.png")}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  flexx: {
    flexDirection: "row",
    paddingTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  Text: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  Text1: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  Text2: {
    color: "green",
    fontSize: 22,
    fontWeight: "bold",
  },
  Text3: {
    color: "white",
    paddingTop: 15,
    fontSize: 22,
    fontWeight: "500",
    paddingBottom: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});
