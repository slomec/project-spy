import { Pressable } from "react-native";

import ArrowIcon from "@/assets/icons/arrow.svg";
import { colors } from "@/theme/colors";

type direction = "left" | "right" | "up" | "down";

export default function ArrowButton({
  direction = "left",
  hiden = false,
  ...props
}: { direction?: direction; hiden?: boolean } & React.ComponentProps<typeof Pressable>) {
  const rotationDegrees = {
    left: "0deg",
    right: "180deg",
    up: "-90deg",
    down: "90deg",
  };
  return (
    <Pressable {...props} disabled={hiden}>
      {({ hovered, pressed }) => (
        <ArrowIcon
          fill={hovered || pressed ? colors.secondaryButtonActive : colors.secondaryButton}
          style={{ transform: [{ rotate: rotationDegrees[direction] }], opacity: hiden ? 0 : 1 }}
        />
      )}
    </Pressable>
  );
}
