import { AuthProvider } from "@/contexts/authContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack.Screen options={{headerShown: false}}/>
    </AuthProvider>
  );
}