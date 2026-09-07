import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: '#121212' },
        headerTintColor: '#fff',
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: '#1a1a1a',
          borderTopColor: '#2a2a2a',
        },
        tabBarActiveTintColor: '#38b06c',
        tabBarInactiveTintColor: '#888',
        
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Commit',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="folder-outline" size={focused ? size + 4 : size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dates"
        options={{
          title: 'Datas',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="time-outline" size={focused ? size + 4 : size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendário',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="calendar-outline" size={focused ? size + 4 : size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}