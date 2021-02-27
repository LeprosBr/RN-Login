import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

const Dashboard: React.FC = () => {
  return (
    <NavigationContainer>
      <View>
        <Text> Bem vindo! </Text>
      </View>
    </NavigationContainer>
  );
};

export default Dashboard;
