import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { FontName } from "@/app/enums/styles/font-name";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationName } from "@/app/enums/navigation-name";
import { LoginScreen } from "@/app/screens/LoginScreen";
import { SingUpScreen } from "@/app/screens/SingUpScreen";
import { ChatScreen } from "@/app/screens/ChatScreen";
import { RoomsScreen } from "@/app/screens/RoomsScreen";
import { RootStackParamList } from "@/app/types/root-params";
import { ApolloProvider } from "@apollo/client";
import { useAuthStore } from "@/app/store/useAuthStore";

const Stack = createStackNavigator<RootStackParamList>();
export default function App() {
  const [fontsLoaded] = useFonts({
    [FontName.Poppins]: require("@assets/fonts/Poppins-Regular.ttf"),
    [FontName.PoppinsBold]: require("@assets/fonts/Poppins-Bold.ttf"),
    [FontName.PoppinsSemiBold]: require("@assets/fonts/Poppins-SemiBold.ttf"),
    [FontName.PoppinsMedium]: require("@assets/fonts/Poppins-Medium.ttf"),
  });

  const { token, client } = useAuthStore();

  if (!fontsLoaded) return null;

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={
            token === null ? NavigationName.SignUp : NavigationName.Rooms
          }
          screenOptions={{ headerShown: false }}
        >
          {token === null ? (
            <>
              <Stack.Screen
                name={NavigationName.Login}
                component={LoginScreen}
              />
              <Stack.Screen
                name={NavigationName.SignUp}
                component={SingUpScreen}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name={NavigationName.Rooms}
                component={RoomsScreen}
              />
              <Stack.Screen name={NavigationName.Chat} component={ChatScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
