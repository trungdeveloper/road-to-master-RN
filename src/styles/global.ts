import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#333",
  },

  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },

  primaryButton: {
    margin: 5,
    paddingHorizontal: 47,
    paddingVertical: 18,
    height: 56,
    maxWidth: 'fit-content',
    backgroundColor: '#FFBD2F',
    borderRadius: 28,
    justifyContent: 'center',
  },

  secondayButton: {
    margin: 5,
    paddingHorizontal: 47,
    paddingVertical: 18,
    height: 56,
    maxWidth: 'fit-content',
    backgroundColor: '#fff',
    borderRadius: 28,
    justifyContent: 'center',
  },

  primaryText: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19.41,
    textAlign: 'center',
    color: '#000'
  },

  secondaryText: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19.41,
    textAlign: 'center',
    color: '#8B8989'
  }
});
