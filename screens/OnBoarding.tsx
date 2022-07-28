import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// eslint-disable-next-line
import Swiper from "react-native-swiper/src";
import * as image from "../assets/images/onboarding-BG.png";
import { globalStyles } from "../styles/global";
import { storeData } from "../utils";

const swiper = [
  {
    text: "Welcome to the  foodes.",
    image: require("../assets/images/swiper1.png"),
  },
  {
    text: "We suggest the best food for you.",
    image: require("../assets/images/swiper2.png"),
  },
  {
    text: "Ready for looking delicious food?",
    image: require("../assets/images/swiper3.png"),
    isLast: true,
  },
];

export default function OnBoarding({ navigation }) {
  const handleStartApp = () => {
    storeData("isAppStarted", true, true);
    navigation.push("Home");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.BGImage} resizeMode="cover">
        <Swiper showsButtons loop={false}>
          <View style={styles.swiper1}>
            <Image
              source={require("../assets/appicon.png")}
              style={styles.appIcon}
            />
            <Text style={globalStyles.titleText}>Foodes App</Text>
          </View>
          <View style={styles.swiper}>
            <Text style={globalStyles.titleText}>{swiper[0].text}</Text>
            <Image source={swiper[0].image} style={styles.image} />
            <View />
          </View>
          <View style={styles.swiper}>
            <Text style={globalStyles.titleText}>{swiper[1].text}</Text>
            <Image source={swiper[1].image} style={styles.image} />
            <View />
          </View>
          <View style={styles.swiper}>
            <Text style={globalStyles.titleText}>{swiper[2].text}</Text>
            <Image
              source={swiper[2].image}
              style={styles.image}
              resizeMode="stretch"
            />
            <TouchableOpacity
              onPress={handleStartApp}
              style={styles.getStartedButton}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </Swiper>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  BGImage: {
    flex: 1,
    justifyContent: "center",
  },
  appIcon: {
    height: 60,
    width: 60,
    marginBottom: 24,
  },
  image: {
    width: 230,
    height: 230,
  },
  fullScreenWidthImg: {
    flex: 1,
    height: 230,
    width: undefined,
  },
  swiper1: {
    flex: 1 / 3,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  swiper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  getStartedButton: {
    backgroundColor: "black",
    width: "50%",
    height: 56,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 56,
  },
});
