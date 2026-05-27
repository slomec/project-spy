import ArrowButton from "@/components/ui/ArrowButton";
import { colors } from "@/theme/colors";
import React from "react";
import { Platform, Pressable, StyleSheet, TextInput, View } from "react-native";
import { AppText } from "./AppText";

export function NumberInput({ time = false, defaultValue = "10" }: { time?: boolean; defaultValue?: string }) {
  const [value, setValue] = React.useState(defaultValue || "");
  const [isFocused, setIsFocused] = React.useState(false);
  const inputRef = React.useRef<TextInput>(null);

  const handleClick = (delta: number) => {
    const newValue = parseInt(value) + delta;
    setValue(isNaN(newValue) ? "0" : newValue.toString());
  };

  const handleChangeText = (text: string) => {
    const onlyNumbers = text.replace(/[^0-9]/g, "");
    setValue(onlyNumbers);
  };

  return (
    <Pressable style={styles.component} onPress={() => inputRef.current?.focus()}>
      <ArrowButton onPress={() => handleClick(-1)} />
      <View style={[styles.box, isFocused && styles.boxFocused]}>
        <TextInput
          style={styles.input}
          ref={inputRef}
          keyboardType="numeric"
          maxLength={2}
          value={value}
          onChangeText={handleChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {time && !isFocused && <AppText style={styles.text}>минут</AppText>}
      </View>
      <ArrowButton onPress={() => handleClick(1)} direction="right" />
    </Pressable>
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
    justifyContent: "center",
    gap: 0,
    ...(Platform.OS === "web"
      ? ({
          cursor: "text",
        } as any)
      : {}),
  },
  boxFocused: {
    backgroundColor: colors.activeInput,
    borderWidth: 2,
    borderColor: colors.numberInput,
  },
  input: {
    width: "100%",
    textAlign: "center",
    fontSize: 24,
    color: colors.text,
    lineHeight: 13,
    outlineWidth: 0,
    ...(Platform.OS === "web"
      ? ({
          outlineStyle: "none",
        } as any)
      : {}),
  },
  text: {
    bottom: 4,
    textAlign: "center",
    color: colors.text,
    fontSize: 12,
  },
});
