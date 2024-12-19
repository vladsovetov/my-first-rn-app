/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Alert, Button, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-slate-800 text-2xl font-bold">
        Push button below
      </Text>
      <Button title="Click me" onPress={() => { Alert.alert('Люблю зайку!')}} />
    </View>
  );
}

export default App;
