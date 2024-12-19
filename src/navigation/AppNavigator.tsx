import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalendarScreen from '@/screens/Calendar';
import DayScreen from '@/screens/Day';

export type RootStackParamList = {
  Calendar: undefined;
  Day: {
    date: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen
          name="Day"
          component={DayScreen}
          options={{
            title: 'Daily Schedule',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
