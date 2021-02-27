import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Kaio Eduardo Gama</Text>
      </View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(250, 245, 255, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
});
