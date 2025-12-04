import React, { useState } from "react";
import { View, Text, Button, ActivityIndicator, StyleSheet } from "react-native";
import LabeledInput from "../components/LabeledInput";

export default function MainScreen({ navigation }) {

  // Your actual API Key
  const API_KEY = "fca_live_8WRUn2zxOJPf0bWADfmP4P8wBMoSkuQ7ArcZCfOd";

  const [baseCurrency, setBaseCurrency] = useState("CAD");
  const [destCurrency, setDestCurrency] = useState("");
  const [amount, setAmount] = useState("1");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const validateInputs = () => {
    if (!/^[A-Z]{3}$/.test(baseCurrency)) return "Base currency must be 3 uppercase letters.";
    if (!/^[A-Z]{3}$/.test(destCurrency)) return "Destination currency must be 3 uppercase letters.";
    if (isNaN(amount) || Number(amount) <= 0) return "Amount must be a positive number.";
    return null;
  };

  const convertCurrency = async () => {
    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      return;
    }

    const resetForm = () => {
  setBaseCurrency("CAD");
  setDestCurrency("");
  setAmount("1");
  setResult(null);
  setError("");
};

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&base_currency=${baseCurrency}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!data?.data) {
        setError("Invalid API response.");
        setLoading(false);
        return;
      }

      const rate = data.data[destCurrency];

      if (!rate) {
        setError(`Currency ${destCurrency} not found.`);
        setLoading(false);
        return;
      }

      const converted = (Number(amount) * rate).toFixed(2);

      setResult({
        rate,
        converted,
      });

    } catch (err) {
      setError("Network error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Button title="About App" onPress={() => navigation.navigate("About")} />

      <LabeledInput
        label="Base Currency"
        value={baseCurrency}
        onChangeText={setBaseCurrency}
        placeholder="CAD"
      />

      <LabeledInput
        label="Destination Currency"
        value={destCurrency}
        onChangeText={setDestCurrency}
        placeholder="USD"
      />

      <LabeledInput
        label="Amount"
        value={amount}
        onChangeText={setAmount}
        placeholder="1"
      />

      {loading ? (
        <ActivityIndicator size="large" style={{ marginVertical: 20 }} />
      ) : (
        <Button title="Convert" onPress={convertCurrency} />
      )}

      <Button title="Reset" color="grey" onPress={resetForm} />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {result && (
        <View style={styles.outputBox}>
          <Text style={styles.result}>Exchange Rate: {result.rate}</Text>
          <Text style={styles.result}>Converted Amount: {result.converted}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  error: { color: "red", marginTop: 10, fontWeight: "bold" },
  outputBox: { marginTop: 20, padding: 15, borderWidth: 1, borderRadius: 6 },
  result: { fontSize: 18, fontWeight: "bold" },
});