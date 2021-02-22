import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import ClassListitem from '../../components/ClassListitem';



export default function ClassesScreen() {
  return (
    <View style={styles.container}>
      <ClassListitem ClassRoom={{lastMassage: {content: "Hello There"}}}/>
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
