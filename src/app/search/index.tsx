import { useIsFocused } from 'expo-router';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

const DATA = Array.from({ length: 50 }, (_, i) => `Row ${i + 1}`);

export default function Search() {
  const isFocused = useIsFocused();
  const [taps, setTaps] = useState(0);

  return (
    <FlatList
      contentInsetAdjustmentBehavior="automatic"
      data={DATA}
      keyExtractor={(item) => item}
      ListHeaderComponent={
        <View style={[styles.banner, { backgroundColor: isFocused ? '#d4f5d4' : '#ffd6d6' }]}>
          <Text style={styles.bannerText}>useIsFocused(): {String(isFocused)}</Text>
          <Text style={styles.bannerText}>row taps: {taps}</Text>
        </View>
      }
      renderItem={({ item }) => (
        <Pressable
          onPress={() => setTaps((t) => t + 1)}
          style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
        >
          <Text>{item}</Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  banner: { margin: 16, padding: 12, borderRadius: 8, gap: 4 },
  bannerText: { fontWeight: '600' },
  row: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  rowPressed: { backgroundColor: '#eee' },
});
