// src/screens/AddBudgetScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddBudgetScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Budget</Text>
      {/* Your add budget form or logic goes here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default AddBudgetScreen;
