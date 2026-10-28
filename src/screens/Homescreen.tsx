import { Text, View, Image, Pressable } from 'react-native'
import { RootStackParamList } from '../navigator/AppNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type Props = NativeStackScreenProps<RootStackParamList, "Homescreen">;

export default function Homescreen({ navigation }: Props) {
    return (
        <View className=' flex-1 mt-10 bg-slate-400 min-h-screen '>
            <View className='items-start mt-10'>
                <Text className='text-xl text-white'>
                    press here to view profile
                </Text>
            </View>

            <Pressable onPress={() => navigation.navigate("Profile")} className='items-center justify-center flex-1'>
                <Image source={require("../../assets/images/user.png")}
                    className='h-40 w-40' />
            </Pressable>
        </View>
    )
}