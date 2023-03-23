import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {SearchScreen} from './src/screens';

interface AppProps {}

function App({}: AppProps): React.ReactElement {
  return (
    <SafeAreaView style={styles.container}>
      <SearchScreen />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/// https://mobile-staging.gametime.co/v1/search?q=michigan
