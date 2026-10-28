import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParamList } from '../navigator/AppNavigator'


type props = NativeStackScreenProps<RootStackParamList, "Profile">

export default function Profile({ navigation }: props) {
  return (
    <View className='mt-14 bg-gray-600 min-h-screen flex-1  ' >

      <View className="flex-row items-center justify-between px-4 py-3 h-20 border-b border-slate-800 bg-gray-400">

        {/* Left Action / Menu Button */}
        <TouchableOpacity className="p-2 active:opacity-70" onPress={() => navigation.navigate("Homescreen")}>
          <Text className="text-black text-base font-medium">back</Text>
        </TouchableOpacity>

        {/* Center Title / Brand Logo */}
        <Text className="text-white text-lg font-bold tracking-wide">
          AppBrand
        </Text>

        <Text className="text-white text-lg font-bold tracking-wide">
          profile
        </Text>




        {/* Right Action / Profile Button */}
        <TouchableOpacity className="p-2 bg-indigo-600 rounded-full px-4 active:opacity-80"   onPress={()=> navigation.navigate("Login") }>
          <Text className="text-white text-xs font-semibold">Login</Text>
        </TouchableOpacity>

      </View>



      <View className='flex-1 items-start'>
        <Image source={require("../../assets/images/user.png")} className='size-20 mt-5 ml-5' />
      </View>

    </View>
  )
}