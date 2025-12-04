import { Text, StyleSheet } from "react-native";

export default function ErrorMessage({ message }) {
  if (!message) return null;

  return <Text style={styles.error}>{message}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 16,
  },
});
