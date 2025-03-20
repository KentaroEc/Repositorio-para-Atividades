import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  const showGoalAlert = () => {
    alert("Gol do Messi!");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Nome do Jogador */}
        <Text style={styles.playerName}>Lionel Messi</Text>

        {/* Informações do Jogador */}
        <Text style={styles.info}>Posição: Atacante</Text>
        <Text style={styles.info}>Nacionalidade: Argentina</Text>
        <Text style={styles.info}>Nascimento: 24 de Junho de 1987</Text>
        <Text style={styles.info}>Clube Atual: Inter Miami</Text>
        <Text style={styles.info}>Número: 10</Text>

        {/* Imagens */}
        <Image
          source={{ uri: "https://example.com/messi1.jpg" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://example.com/messi2.jpg" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://example.com/messi3.jpg" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://example.com/messi4.jpg" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://example.com/messi5.jpg" }}
          style={styles.image}
        />

        {/* Botão */}
        <Button title="GOL" onPress={showGoalAlert} color="#841584" />

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  playerName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
    color: "#666",
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 15,
    borderRadius: 10,
  },
});