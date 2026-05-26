import { colors } from "@/theme/colors";
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, TextInput, View } from "react-native";
import { AppText } from "./AppText";

export function NumberInput({ time = false }: { time?: boolean }) {
  return (
    <View style={styles.component}>
      <CustomButton direction="l" />
      <View style={styles.box}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
          <TextInput style={styles.input} keyboardType="numeric" />
          {time && <AppText style={styles.text}>минут</AppText>}
        </KeyboardAvoidingView>
      </View>
      <CustomButton direction="r" />
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    flexDirection: "row",
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

function CustomButton({ direction = "l" }: { direction: "l" | "r" }) {
  const rotation = direction === "l" ? "rotate(45deg)" : "rotate(-135deg)";
  return <Pressable style={[buttonStyles.button, { transform: [{ rotate: rotation }] }]} />;
}

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondaryButton,
    width: 20,
    height: 20,
    borderRadius: 4,
  },
});
