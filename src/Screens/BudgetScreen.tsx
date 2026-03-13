// src/screens/BudgetScreen.tsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './BudgetScreenNavigator';

// Create a type for the navigation prop for this screen.
type BudgetScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BudgetScreen'
>;

const BudgetScreen: React.FC = () => {
  // Now navigation is typed so it knows about "AddBudgetScreen"
  const navigation = useNavigation<BudgetScreenNavigationProp>();

  // State to hold budget items.
  const [budgets, setBudgets] = useState<
    Array<{ id: string; title: string; amount: string }>
  >([]);

  useEffect(() => {
    // Simulate fetching budgets on mount:
    // Uncomment to simulate an example:
    // setBudgets([{ id: '1', title: 'Monthly Budget', amount: '$2000' }]);
  }, []);

  const renderItem = ({ item }: { item: { id: string; title: string; amount: string } }) => (
    <View style={styles.budgetItem}>
      <Text style={styles.budgetTitle}>{item.title}</Text>
      <Text style={styles.budgetAmount}>{item.amount}</Text>
    </View>
  );

  const handleAddBudget = () => {
    // TypeScript now recognizes "AddBudgetScreen" as valid.
    navigation.navigate('AddBudgetScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Budgets</Text>
      {budgets.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            No budgets added yet. Tap the plus sign to plan your budget!
          </Text>
          {/* Update the path below with your own image asset */}
        </View>
      ) : (
        <FlatList
          data={budgets}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
        />
      )}

      {/* Floating Plus Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddBudget}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  emptyImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },
  listContent: {
    paddingBottom: 100,
  },
  budgetItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  budgetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  budgetAmount: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#00C853',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 30,
    color: '#fff',
  },
});

export default BudgetScreen;
