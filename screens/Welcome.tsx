import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, Pressable, Text, View } from "react-native";
import { RootStackParamList } from "../navigators/Navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

export default function Welcome({ navigation }: Props) {
  return (
    <View className="flex-1 items-center justify-center bg-[#282836] px-6">
      <View className="mb-5">
        <Image
          source={require("../assets/images/ghost.png")}
          style={{ width: 128, height: 128 }}
          resizeMode="contain"
        />
      </View>

      <Text className="text-white text-3xl font-bold text-center">
        GameValut
      </Text>

      <View className="mt-2">
        <Text className="text-white text-xs text-center">
          Your ultimate DRM-free gaming library, right at your fingertips.
        </Text>
      </View>

      <View className="mt-20">
        <Pressable
          className="bg-[#282836] rounded-full w-48 items-center"
          onPress={() => navigation.navigate("Home")}
        >
          <Text className="text-2xl text-white p-6">
            E n t e r
          </Text>
        </Pressable>
      </View>
    </View>
  );
}