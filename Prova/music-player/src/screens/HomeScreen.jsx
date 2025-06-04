import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { Text, List, ActivityIndicator, IconButton } from 'react-native-paper';

export default function HomeScreen() {
  const [musicas, setMusicas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarMusicas() {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        setErro('Permissão negada para acessar os arquivos de mídia.');
        setCarregando(false);
        return;
      }

      try {
        const musicasAsset = await MediaLibrary.getAssetsAsync({
          mediaType: 'audio',
          first: 1000, // máximo de arquivos a carregar
          sortBy: [['title', false]]
        });

        setMusicas(musicasAsset.assets);
      } catch (e) {
        setErro('Erro ao carregar músicas: ' + e.message);
      } finally {
        setCarregando(false);
      }
    }

    carregarMusicas();
  }, []);

  if (carregando) {
    return <ActivityIndicator animating={true} size="large" style={{ marginTop: 50 }} />;
  }

  if (erro) {
    return (
      <View style={{ padding: 20 }}>
        <Text variant="titleMedium" style={{ color: 'red' }}>{erro}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={musicas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.filename}
            description={`Tamanho: ${(item.duration / 60).toFixed(2)} min`}
            left={props => <List.Icon {...props} icon="music" />}
            right={props => <IconButton {...props} icon="play" />}
          />
        )}
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhuma música encontrada</Text>}
      />
    </View>
  );
}
