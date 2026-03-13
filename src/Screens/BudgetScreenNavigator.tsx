// src/navigation/BudgetScreenNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BudgetScreen from './BudgetScreen';
import AddBudgetScreen from './AddBudgetScreen';

const Stack = createStackNavigator();

export const BudgetScreenNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BudgetScreen">
        <Stack.Screen
          name="BudgetScreen"
          component={BudgetScreen}
          options={{ title: 'Budget Overview' }}
        />
        <Stack.Screen
          name="AddBudgetScreen"
          component={AddBudgetScreen}
          options={{ title: 'Add Budget' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
