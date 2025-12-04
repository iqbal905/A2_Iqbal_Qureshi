import { Appearance } from "react-native";

const colorScheme = Appearance.getColorScheme();

export const theme = {
  background: colorScheme === "dark" ? "#121212" : "#FFFFFF",
  text: colorScheme === "dark" ? "#FFFFFF" : "#000000",
  card: colorScheme === "dark" ? "#1E1E1E" : "#F2F2F2",
};
