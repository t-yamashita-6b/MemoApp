import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppBar from './src/components/AppBar';
import MemoList from './src/components/MemoList';
import CircleButton from './src/components/CircleButton';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <AppBar></AppBar>
      {/* /Header */}


      {/* MemoList */}
      <MemoList></MemoList>
      {/* /MemoList */}


      {/* Button */}
      <CircleButton>-</CircleButton>
      {/* /Button */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8'
  },
});

