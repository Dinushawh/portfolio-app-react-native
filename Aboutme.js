import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Image
        source={require("./assets/1693930188537.jpeg")}
        style={{
          width: 150,
          height: 150,
          borderRadius: 400 / 2,
        }}
      />
      <Text style={styles.Text}>I'M DINUSHA WEERAKOON </Text>
      <Text style={styles.Text1}>
        I am a dedicated student in the Faculty of Technology at Rajarata
        University of Sri Lanka. With over 3+ years of experience in IT, I
        specialize in Mobile Application and Web Application. I have a strong
        background in analyzing, designing and developing various applications
        for iOS, Android, and the web. Additionally, I possess extensive
        knowledge of cloud-based databases and cloud applications.
      </Text>

      <Text style={styles.Text3}>PROGRAMMING SKILLS</Text>
      <View style={styles.flexx}>
        <Image
          style={styles.imagestyle}
          source={require("./assets/icons/icons8-react-100.png")}
        />
        <Image
          style={styles.imagestyle}
          source={require("./assets/icons/icons8-java-48.png")}
        />
        <Image
          style={styles.imagestyle}
          source={require("./assets/icons/icons8-python-48.png")}
        />
        <Image
          style={styles.imagestyle}
          source={require("./assets/icons/icons8-flutter-48.png")}
        />
        <Image
          style={styles.imagestyle}
          source={require("./assets/icons/icons8-google-cloud-48.png")}
        />
        <Image
          style={styles.imagestyle}
          source={require("./assets/icons/icons8-google-firebase-console-48.png")}
        />
        <Image
          style={styles.imagestyle}
          source={require("./assets/icons/icons8-mongodb-48.png")}
        />
        <Image
          style={styles.imagestyle}
          source={require("./assets/icons/icons8-mysql-logo-48.png")}
        />

        <Image
          style={styles.imagestyle}
          source={require("./assets/icons/icons8-oracle-logo-48.png")}
        />
        <Image
          style={styles.imagestyle}
          source={require("./assets/icons/icons8-tensorflow-48.png")}
        />
      </View>
      <View style={styles.flexx}>
        <View
          style={{
            flexDirection: "column",
            paddingLeft: 30,
            paddingRight: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.Text5}>10+</Text>
          <Text style={styles.Text6}>Projects </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            paddingLeft: 30,
            paddingRight: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.Text5}>2+</Text>
          <Text style={styles.Text6}>Active Projects </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imagestyle: { width: 30, height: 30, margin: 5 },
  flexx: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },

  Text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  boldText: {
    color: "#1CE678",
    fontSize: 14,
    fontWeight: "bold",
  },
  Text5: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },

  Text6: {
    color: "white",
    fontSize: 16,
    fontWeight: "light",
  },

  Text1: {
    color: "white",
    fontSize: 14,
    fontWeight: "light",
    padding: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  Text2: {
    color: "green",
    fontSize: 22,
    fontWeight: "400",
  },
  Text3: {
    color: "white",
    paddingTop: 15,
    fontSize: 22,
    fontWeight: "400",
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
