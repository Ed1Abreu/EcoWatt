import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import styles from './src/styles/app';
import { AppRoutes } from './src/routes/app.routes';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AppRoutes/>
    </View>
  );
}

