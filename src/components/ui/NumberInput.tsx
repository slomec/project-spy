import ArrowButton from "@/components/ui/ArrowButton";
import { colors } from "@/theme/colors";
import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, TextInput, View } from "react-native";
import { AppText } from "./AppText";

export function NumberInput({ time = false, defaultValue = "10" }: { time?: boolean; defaultValue?: string }) {
  const [value, setValue] = React.useState(defaultValue || "");

  const handleClick = (delta: number) => {
    const newValue = parseInt(value) + delta;
    setValue(isNaN(newValue) ? "0" : newValue.toString());
  };

  return (
    <View style={styles.component}>
      <ArrowButton onPress={() => handleClick(-1)} />
      <View style={styles.box}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
          <TextInput style={styles.input} keyboardType="numeric" maxLength={2} value={value} onChangeText={setValue} />
          {time && <AppText style={styles.text}>минут</AppText>}
        </KeyboardAvoidingView>
      </View>
      <ArrowButton onPress={() => handleClick(1)} direction="right" />
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  box: {
    backgroundColor: colors.numberInput,
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 0,
    flexDirection: "column",
    alignItems: "center",
    gap: 0,
  },
  input: {
    width: "100%",
    textAlign: "center",
    fontSize: 24,
    color: colors.text,
    flex: 1,
  },
  text: {
    bottom: 4,
    textAlign: "center",
    color: colors.text,
    fontSize: 12,
  },
});
