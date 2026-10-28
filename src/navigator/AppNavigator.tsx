import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import Homescreen from "../screens/Homescreen";
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import Welcome from "../screens/Welcome";

// Define the available screens
export type RootStackParamList = {
  Welcome: undefined;
  Homescreen: undefined;
  Profile: undefined;
  Login: undefined;

};

// Create the navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
      />

      <Stack.Screen
        name="Homescreen"
        component={Homescreen}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
      />

      <Stack.Screen 
      name = "Login"
      component={Login} />

    </Stack.Navigator>
  );
}

