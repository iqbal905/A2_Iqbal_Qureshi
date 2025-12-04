# 📱 Currency Converter App  
### COMP3074 – Assignment 2  
### Developed by: **Iqbal Qureshi**  
### Student ID: **101366167**

---

## 📝 Overview

This React Native (Expo) application is built for **COMP3074 – Assignment 2**.  
The app provides real-time currency conversion using the **FreeCurrencyAPI** platform.

The assignment requirements include:
- Two screens (MainScreen + AboutScreen)
- Navigation between screens
- User input validation
- API integration
- Error handling
- Clean UI and optional enhancements

This project includes *all required features* plus additional improvements such as dark mode, input trimming, reusable components, input validation button, and reset functionality.

---

## 📌 Features

### ✅ **MainScreen**
- Enter:
  - Base Currency (e.g., CAD, USD)
  - Destination Currency
  - Amount to convert
- Input validation:
  - 3-letter uppercase ISO currency codes  
  - Positive numeric amount
- Fetch latest exchange rates from FreeCurrencyAPI
- Display:
  - Exchange rate  
  - Converted amount  
- Error handling:
  - Invalid API key  
  - Network errors  
  - Unsupported currency  
- Loading indicator during API requests
- Convert button disabled while loading
- **Reset button** to clear all fields
- **Validate Inputs** button for checking entries without API calls
- Dark mode support
- Reusable LabeledInput & ErrorMessage components

---

## 🧭 **AboutScreen**
Displays:
- Full Name: **Iqbal Qureshi**  
- Student ID: **101366167**
- Short description of app functionality

---

## 🌐 API Used

**FreeCurrencyAPI**  
https://api.freecurrencyapi.com/v1/latest

Example request used in this app:

