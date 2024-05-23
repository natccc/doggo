import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Resturants" }} />
      <Stack.Screen name="[id]" options={{ title: "Details" }} />
    </Stack>
  );
}
