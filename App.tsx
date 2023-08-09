import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins': require('@assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
      <NavigationContainer>
      <View style={styles.container} >
        <Text style={{ fontFamily: 'Poppins', fontSize: 30 , fontWeight:"bold" }}>Inter Black</Text>
        <Text style={{ fontSize: 49 }}>Platform Default</Text>
      </View>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
