import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>历史记录</Text>
      <View style={styles.separator} />
      <Text style={styles.emptyText}>暂无历史记录</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    backgroundColor: Colors.light.border,
  },
  emptyText: {
    fontSize: 16,
    color: Colors.light.tabIconDefault,
  },
});
