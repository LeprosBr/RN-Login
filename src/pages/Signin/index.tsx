import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { signIn } from "../../services/auth";

import AuthContext from "../../contexts/auth";

const SignIn: React.FC = () => {
  const { signed, signIn } = useContext(AuthContext);

  console.log(signed);

  async function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Text> LOGIN</Text>
      <Button title="Sign in" onPress={handleSignIn}></Button>
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
