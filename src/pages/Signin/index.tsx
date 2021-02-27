import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import AuthContext from "../../contexts/auth";

const SignIn: React.FC = () => {
  const { signed, user, signIn } = useContext(AuthContext);

  console.log("SignIn => " + signed);
  console.log("SignIn => " + user);

  async function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Text> Fazer login</Text>
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
