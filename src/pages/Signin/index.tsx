import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const SignIn: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text> Fazer login! </Text>
      <Button title="Sign in" onPress={() => {}}></Button>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(250, 245, 255, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
});
