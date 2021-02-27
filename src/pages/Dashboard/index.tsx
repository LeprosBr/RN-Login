import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import AuthContext from "../../contexts/auth";

const Dashboard: React.FC = () => {
  const { signOut } = useContext(AuthContext)

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Text> Bem vindo ao Dashboard nativo! </Text>
      <Button title="Sign out" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(250, 245, 255, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
});
