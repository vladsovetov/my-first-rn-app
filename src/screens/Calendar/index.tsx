import { Calendar } from '@/components/Calendar/Calendar';
import React from 'react';
import { View } from 'react-native';

function CalendarScreen(): JSX.Element {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Calendar />
    </View>
  );
}

export default CalendarScreen;
