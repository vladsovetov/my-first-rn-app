import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

type DayScreenParams = {
  date: string; // Format: YYYY-MM-DD
};

function DayScreen(): JSX.Element {
  const route = useRoute();
  const { date } = route.params as DayScreenParams;

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-slate-800 text-2xl font-bold mb-4">
        Events for {date}
      </Text>

      {/* We'll add event list here later */}
      <View className="flex-1">
        <Text className="text-slate-600">No events for this day</Text>
      </View>
    </View>
  );
}

export default DayScreen;
