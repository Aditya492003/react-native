import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, Text, TextInput, View } from 'react-native';
import type { RootStackParamList } from "../navigator/AppNavigator";


type Props = NativeStackScreenProps<RootStackParamList, "Login">;





export default function Login({navigation}:Props) {
  return (
    <View className='bg-gray-600 min-h-screen flex items-center justify-center'>
        <View className=''>
            <Text className='text-white text-2xl'>LOGIN PAGE</Text>
        </View>

        <View className='bg-gray-500 p-10  flex rounded-xl  mt-10'>


            <View className='mb-1'>
                <Text className='text-white text-2xl'>
                    Email
                </Text>
            </View>

        <View className='bg-slate-300 rounded-lg w-60' >
        <TextInput placeholder='email'/>
        </View>

        <View className='mb-1 mt-6'>
                <Text className='text-white text-2xl'>
                    password
                </Text>
            </View>

         <View className='bg-slate-300 rounded-lg  w-60' >
        <TextInput placeholder='password'/>
        </View>


        <Pressable className='items-center  mt-10 bg-blue-400 p-2 rounded-full ' onPress={()=> navigation.navigate("Welcome")}>
            <Text className='text-2xl text-white'>
                LOGIN
            </Text>
        </Pressable>


      

        </View>
            

    </View>
  )
}