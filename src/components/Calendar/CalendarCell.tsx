import React from 'react';
import { View, Text, Pressable, StyleProp, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export interface CalendarCellProps {
  column: number;
  date: Date;
  isCurrentDay?: boolean;
}

export const CalendarCell = ({
  date,
  column,
  isCurrentDay = false,
}: CalendarCellProps) => {
  const navigation = useNavigation<NavigationProp>();
  const day = date.getDate();
  const style: StyleProp<ViewStyle> =
    day === 1 ? { marginLeft: `${(100 / 7) * (column - 1)}%` } : undefined;

  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

  return (
    <Pressable
      style={style}
      onPress={() => navigation.navigate('Day', { date: formattedDate })}
      className="w-[14.28%] aspect-square ">
      <View
        className={`flex-1 border border-gray-200 p-1 items-center justify-center ${
          isCurrentDay ? 'bg-blue-100' : ''
        }`}>
        <Text
          className={`text-center text-gray-700 ${
            isCurrentDay ? 'font-bold' : ''
          }`}>
          {day}
        </Text>
      </View>
    </Pressable>
  );
};
