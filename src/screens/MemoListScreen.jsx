import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';

export default function MemoListScreen() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <AppBar></AppBar>
      {/* /Header */}


      {/* MemoList */}
      <MemoList></MemoList>
      {/* /MemoList */}


      {/* Button */}
      <CircleButton name="plus" />
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

