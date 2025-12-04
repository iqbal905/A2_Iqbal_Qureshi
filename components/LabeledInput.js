import { View, Text, TextInput, StyleSheet } from "react-native";

export default function LabeledInput({
  label,
  value,
  onChangeText,
  placeholder,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoCapitalize="characters"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 8 },
  label: { fontWeight: "bold", marginBottom: 4, fontSize: 16 },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    fontSize: 16,
  },
});
