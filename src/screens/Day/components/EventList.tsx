import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { CalendarEvent } from '@/components/Calendar/Calendar.types';

interface EventListProps {
  events: CalendarEvent[];
}

export function EventList({ events }: EventListProps): JSX.Element {
  if (events.length === 0) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-slate-600">No events scheduled</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={events}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View className="bg-white rounded-lg shadow-sm p-4 mb-2">
          <Text className="text-slate-800 font-medium">{item.title}</Text>
          <Text className="text-slate-600">{item.description}</Text>
        </View>
      )}
    />
  );
}
