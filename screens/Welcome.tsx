import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { RootStackParamList } from "../navigators/Navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

export default function Welcome({ navigation }: Props) {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-white text-3xl font-bold">
        Welcome to screen
      </Text>
    </View>
  );
}