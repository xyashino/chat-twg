import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { FontName } from "@/app/enums/styles/font-name";

export default function App() {
  const [fontsLoaded] = useFonts({
    [FontName.Poppins]: require("@assets/fonts/Poppins-Regular.ttf"),
    [FontName.PoppinsBold]: require("@assets/fonts/Poppins-Bold.ttf"),
    [FontName.PoppinsSemiBold]: require("@assets/fonts/Poppins-SemiBold.ttf"),
    [FontName.PoppinsMedium]: require("@assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <View style={styles.container}></View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
