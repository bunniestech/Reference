import {
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Text, View } from "../components/Themed";
import { useState } from "react";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TextRecognitionScreen() {
  const [inputText, setInputText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleRecognize = async () => {
    if (!inputText.trim()) return;
    setIsAnalyzing(true);
    try {
      // TODO: 实现文本识别逻辑
      console.log("分析文本:", inputText);
    } catch (error) {
      console.error("识别错误:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>输入文本</Text>
        <TextInput
          style={styles.input}
          multiline
          placeholder="请输入或粘贴要识别的文本..."
          value={inputText}
          onChangeText={setInputText}
          maxLength={1000}
        />
        <TouchableOpacity
          style={[styles.button, !inputText.trim() && styles.buttonDisabled]}
          onPress={handleRecognize}
          disabled={!inputText.trim() || isAnalyzing}
        >
          <Text style={styles.buttonText}>
            {isAnalyzing ? "识别中..." : "开始识别"}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    minHeight: 150,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E1E1E1",
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.light.tint,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
