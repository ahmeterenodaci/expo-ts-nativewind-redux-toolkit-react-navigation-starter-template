import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Counter } from "../features/counter/Counter";

export default function HomeScreen() {
  return (
    <SafeAreaView edges={[]} className="flex-1">
      <StatusBar style="auto" />
      <View className="flex-1 bg-gray-300  ">
        <Counter />
      </View>
    </SafeAreaView>
  );
}
