import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './src/Styles.js'
import TourPage from './src/TourPage.tsx'

export default function App() {
  return (
    <View style={styles.container}>
      <TourPage/>
    </View>
  );
}
