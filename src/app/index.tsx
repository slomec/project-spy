import { NumberInput } from "@/components/ui/NumberInput";
import { View } from "react-native";

export default function Card() {
  return (
    <View style={{ padding: 20, flexDirection: "row", gap: 10 }}>
      <NumberInput />
      <NumberInput time />
    </View>
  );
}
