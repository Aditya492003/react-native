
/* import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, Text, View } from "react-native";
import type { RootStackParamList } from "../navigator/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

export default function Welcome({ navigation }: Props) {
    return (
        <View className="flex-1 items-center justify-center bg-red-500">

            <View>
                <Image
                    source={require("../../assets/images/user.png")}
                    className="w-40 h-40" />
            </View>

            <View className="mt-4">
                <Text className="text-white text-3xl font-bold" >
                    Welcome to app
                </Text>
            </View>
            <View className="bg-gray-200 p-4 rounded-lg mt-2">
                <Pressable
                    onPress={() => navigation.navigate("Homescreen")}>
                    <Text className="text-2xl">
                        START
                    </Text>
                </Pressable>
            </View>

            <View >
                <Text className="mt-4">
                    this is trial app for ract native
                </Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
} */

import { Text, View } from 'react-native';

export default function Welcome() {

  const songs = [
    "Perfect",
    "Shape of You",
    "Night Changes",
    "Faded",
    "Believer",
  ];

  return (
    <View className="flex-1 p-5 mt-10 ">
      {songs.map((song) => (
        <Text key={song} className="text-lg mb-4 bg-red-500 rounded-lg items-center w-40 "  >
          {song}
        </Text>
      ))}
    </View>
  );
}