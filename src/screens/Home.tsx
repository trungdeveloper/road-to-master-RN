import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";


const Home = () => {
  const [isPressed, setIsPress] = useState(false)
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home</Text>
      <PrimaryButton onPress={() => setIsPress(!isPressed)} title={isPressed ? 'Primary Pressed !' : 'Primary'}/>
      <SecondaryButton onPress={() => setIsPress(!isPressed)} title={isPressed ? 'Secondary Pressed !' : 'Secondary'}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
