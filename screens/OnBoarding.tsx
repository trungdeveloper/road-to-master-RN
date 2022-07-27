import { globalStyles } from "../styles/global";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper/src";
import * as image from "../assets/images/onboarding-BG.png";

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

export default function OnBoarding() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.BGImage}
        resizeMode={"cover"}
      >
        <Swiper>
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
          </View>
          <View style={styles.swiper}>
            <Text style={globalStyles.titleText}>{swiper[1].text}</Text>
            <Image source={swiper[1].image} style={styles.image} />
          </View>
          <View style={styles.swiper}>
            <Text style={globalStyles.titleText}>{swiper[2].text}</Text>
            <Image source={swiper[2].image} style={styles.image} />
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
    flex: 3 / 5,
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
