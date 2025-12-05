import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>

      <Text style={styles.text}>Name: Iqbal Qureshi</Text><Text style={styles.text}>Student ID: 101366167</Text>
      <Text style={styles.text}>Name: Regina Slonimsky</Text><Text style={styles.text}>Student ID: 101491915</Text>



      <Text style={styles.text}>Prof: Mohammad Kiani</Text>

      <Text style={styles.description}>
        This app converts currency using freecurrencyapi.com and shows the exchange rate and converted amount.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  text: { fontSize: 20, marginBottom: 10 },
  description: { fontSize: 16, marginTop: 10 },
});
