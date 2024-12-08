import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type MenuItem = {
  icon: keyof typeof FontAwesome.glyphMap;
  title: string;
  onPress: () => void;
};

export default function ProfileScreen() {
  const menuItems: MenuItem[] = [
    { icon: "star", title: "我的收藏", onPress: () => {} },
    { icon: "cog", title: "设置", onPress: () => {} },
    { icon: "question-circle", title: "帮助与反馈", onPress: () => {} },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>个人中心</Text>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={item.onPress}
          >
            <FontAwesome name={item.icon} size={20} color={Colors.light.tint} />
            <Text style={styles.menuText}>{item.title}</Text>
            <FontAwesome name="chevron-right" size={16} color="#999" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    padding: 20,
    backgroundColor: Colors.light.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  menuContainer: {
    backgroundColor: "#fff",
    marginTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.light.border,
  },
  menuText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
});
