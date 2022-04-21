import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/Card'
import Searchbar from "./components/Searchbar";

export default function App() {
  return (
    <View style={styles.container}>
      <Searchbar/>
      <Card/>
      {/*<StatusBar style="auto" />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
      marginBottom:100,
  },
});
