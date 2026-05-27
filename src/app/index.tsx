import SpyIcon from "@/assets/icons/Spy.svg";
import { AppText } from "@/components/ui/AppText";
import { HelpButton } from "@/components/ui/HelpButton";
import { NumberInput } from "@/components/ui/NumberInput";
import { colors } from "@/theme/colors";
import { StyleSheet, View } from "react-native";

export default function Card() {
  return (
    <View style={{ padding: 20, flexDirection: "column", gap: 10 }}>
      <View style={styles.header}>
        <View style={styles.container}>
          <SpyIcon />
          <AppText style={styles.headerText}>Шпион</AppText>
        </View>
        <HelpButton />
      </View>

      <View style={{ flexDirection: "column", gap: 8 }}>
        <NumberInput text="Кол-во игроков:" />
        <NumberInput text="Время игры:" time />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    width: "100%",
    flexDirection: "row",
    backgroundColor: colors.button,
    borderRadius: 4,
    alignItems: "center",
    padding: 8,
    justifyContent: "space-between",
  },
  container: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  headerText: {
    fontWeight: "medium",
    fontSize: 32,
    bottom: 4,
  },
});
