import React, { useState } from "react";
import { View, Text, Button, ActivityIndicator, StyleSheet } from "react-native";
import LabeledInput from "../components/LabeledInput";
import ErrorMessage from "../components/ErrorMessage"; 

export default function MainScreen({ navigation }) {
  
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

  
  const resetForm = () => {
    setBaseCurrency("CAD");
    setDestCurrency("");
    setAmount("1");
    setResult(null);
    setError("");
  };

 
  const convertCurrency = async () => {
    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
