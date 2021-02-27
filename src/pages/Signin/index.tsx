import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

const SignIn: React.FC = () => {
  return (
    <NavigationContainer>
      <View>
        <Text> Fazer login! </Text>
      </View>
    </NavigationContainer>
  );
};

export default SignIn;
