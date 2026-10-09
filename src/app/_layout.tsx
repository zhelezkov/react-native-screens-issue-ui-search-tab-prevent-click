import { NativeTabs } from 'expo-router/native-tabs';

export default function RootLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" />
      </NativeTabs.Trigger>
      {/* `role` alone only sets `systemItem: 'search'` (a plain UITab).
          `ios.role` makes react-native-screens back the tab with UISearchTab, and
          `automaticallyActivatesSearch` makes UIKit run the search activation
          transition between shouldSelectTab: and didSelectTab:. */}
      <NativeTabs.Trigger
        name="search"
        role="search"
        unstable_nativeProps={{ ios: { role: 'search', automaticallyActivatesSearch: true } }}
      >
        <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
