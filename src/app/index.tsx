import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.steps}>
        1. Tap the Search tab.{'\n'}
        2. Tap the collapsed Home button to go back.{'\n'}
        3. Tap the Search tab again.{'\n\n'}
        Bug: the search screen is visible, but the banner says "useIsFocused(): false" and row taps
        aren't counted.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, paddingTop: 100, gap: 16 },
  title: { fontSize: 32, fontWeight: '700' },
  steps: { fontSize: 15, lineHeight: 22, color: '#444' },
});
