import { useState } from "react";
import { Pressable } from "react-native";

import ArrowIcon from "@/assets/icons/arrow.svg";
import { colors } from "@/theme/colors";

type direction = "left" | "right" | "up" | "down";

export default function ArrowButton({
  direction = "left",
  ...props
}: { direction?: direction } & React.ComponentProps<typeof Pressable>) {
  const [hovered, setHovered] = useState(false);

  const rotationDegrees = {
    left: "0deg",
    right: "180deg",
    up: "-90deg",
    down: "90deg",
  };
  return (
    <Pressable {...props} onHoverIn={() => setHovered(true)} onHoverOut={() => setHovered(false)}>
      {({ hovered, pressed }) => (
        <ArrowIcon
          fill={hovered || pressed ? colors.secondaryButtonActive : colors.secondaryButton}
          style={{ transform: [{ rotate: rotationDegrees[direction] }] }}
        />
      )}
    </Pressable>
  );
}
