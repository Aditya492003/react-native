import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from '../screens/Home';
import Welcome from '../screens/Welcome';

export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
    return (

        <Stack.Navigator 
        initialRouteName='Welcome'
        screenOptions={{
        headerShown: false
        }}
         >

            <Stack.Screen  
            name='Welcome' 
            component={Welcome}/>


            <Stack.Screen 
            name='Home' 
            component={Home}/>

        </Stack.Navigator>

)
}