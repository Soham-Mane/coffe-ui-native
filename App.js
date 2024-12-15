import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './app/screens/HomeScreen';
import Colors from './app/config/Colors';
import CofeeDetailScreen from './app/screens/CofeeDetailScreen';
import coffees from './app/config/coffees';

const Stack = createStackNavigator();


export default function App() {
  return (
    // <View style={{flex: 1, backgroundColor: Colors.dark}}>
   
    //   {/* <HomeScreen/> */}
    //  <CofeeDetailScreen coffee={coffees[0]}/>
    // </View>

  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false, 
        cardStyle: { backgroundColor: "black" }
        // Hides the default header
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={CofeeDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>



  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
