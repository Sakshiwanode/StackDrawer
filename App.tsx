// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';


// Create Drawer and Stack navigators
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


const HomeStack= () =>  {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Firstscreen" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown:true}} />
    </Stack.Navigator>
  );
};

// Drawer Navigator: Contains HomeStack and ProfileScreen
function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName="HomeStack"  screenOptions={{
      drawerPosition: 'right'

    }}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}
