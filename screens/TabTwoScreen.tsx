import * as React from 'react';
import { StyleSheet } from 'react-native';
import ClassListitem from '../components/ClassListitem';

import { View } from '../components/Themed';

export default function ClassesScreen() {
  return (
    <View style={styles.container}>
      <ClassListitem ClassRoom={{LastMassage: {content: "Hello There"}}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
