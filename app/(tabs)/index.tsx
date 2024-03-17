import { StyleSheet } from 'react-native';
import Planner from '@/app/Exercise-Planner/plan-main';
import { Text, View } from '@/components/Themed';

export default function App() {

  return (
  <Planner/>
  );
}

function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercise Planner</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Planner/>
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop : 20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
