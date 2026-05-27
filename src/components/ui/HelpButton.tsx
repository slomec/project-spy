import QuestionIcon from "@/assets/icons/question.svg";
import { colors } from "@/theme/colors";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { AppText } from "./AppText";

export function HelpButton() {
  const router = useRouter();
  return (
    <Pressable style={styles.button} onPress={() => router.push("/rules")}>
      <AppText style={styles.text}>Как играть</AppText>
      <QuestionIcon />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: colors.secondary,
    borderRadius: 3,
    justifyContent: "space-between",
    padding: 6,
    alignItems: "center",
    width: 120,
  },
  text: {
    bottom: 1,
  },
});
