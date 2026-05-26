import { colors } from "@/theme/colors";
import { StyleSheet, Text, TextProps } from "react-native";

export function AppText({ style, ...props }: TextProps) {
  return <Text {...props} style={[styles.base, style]} />;
}

const styles = StyleSheet.create({
  base: {
    color: colors.text,
    fontSize: 16,
  },
});
