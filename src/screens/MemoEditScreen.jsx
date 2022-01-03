import React from 'react';
import { 
  View, TextInput, StyleSheet, KeyboardAvoidingView 
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoEditScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <AppBar></AppBar>

      <View style={styles.inputContainer}>
        <TextInput value="買い物リスト" multiline style={styles.input}></TextInput>
      </View>
      <CircleButton name="check"></CircleButton>
    </KeyboardAvoidingView>
  );
}



const styles = {
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,

  },
};


