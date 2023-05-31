import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';

import HomeScreen from './app/screens/HomeScreen';
import SearchScreen from './app/screens/SearchScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NativeRouter>
        <Routes>
          <Route
            path='/'
            element={
              <HomeScreen />
            }
          />
          <Route
            path='/search'
            element={
              <SearchScreen />
            }
          />
        </Routes>
      </NativeRouter>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#888',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
