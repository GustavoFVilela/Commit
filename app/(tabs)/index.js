import { View, Text, StyleSheet } from 'react-native';

export default function FoldersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Commits</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});