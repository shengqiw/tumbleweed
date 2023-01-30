import React from 'react';
import { TabOneContainer } from '../src/containers/TabOneContainer';
import { View } from '../src/Themed';
import {styles} from './stylesheets/cssTabOneScreen'


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <TabOneContainer />
    </View>
  );
}


