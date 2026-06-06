import "../global.css";

import { colors } from "@/theme/colors";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Keyboard, Pressable } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Pressable onPress={Keyboard.dismiss}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: colors.background,
            },
          }}
        />
      </Pressable>
    </>
  );
}
