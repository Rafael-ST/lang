import { Text, View, StyleSheet } from "react-native";
import Onboarding from "@/components/Onboarding";

export default function Index() {
  return (
    <View style={styles.container}>
      <Onboarding/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
})
