import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { getPlaylists, updatePlaylist } from '../services/storage';

export default function EditPlaylistScreen({ route, navigation }) {
  const { id } = route.params;
  const [playlist, setPlaylist] = useState(null);
  const [erros, setErros] = useState({});

  useEffect(() => {
    async function carregar() {
      const todas = await getPlaylists();
      const alvo = todas.find(p => p.id === id);
      setPlaylist(alvo);
    }
    carregar();
  }, []);

  const validar = () => {
    let e = {};

    if (!playlist.nome || playlist.nome.length < 3) e.nome = 'Nome deve ter pelo menos 3 caracteres';
    if (!playlist.descricao || playlist.descricao.length < 10) e.descricao = 'Descrição deve ter pelo menos 10 caracteres';
    if (playlist.cor && !/^#([0-9A-Fa-f]{6})$/.test(playlist.cor)) e.cor = 'Cor deve estar no formato hexadecimal (#RRGGBB)';

    setErros(e);
    return Object.keys(e).length === 0;
  };

  const salvar = async () => {
    if (!validar()) return;

    await updatePlaylist(id, {
      ...playlist,
      membros: typeof playlist.membros === 'string'
        ? playlist.membros.split(',').map(m => m.trim())
        : playlist.membros
    });

    navigation.goBack();
  };

  if (!playlist) return null;

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <TextInput
        label="Nome"
        value={playlist.nome}
        onChangeText={v => setPlaylist({ ...playlist, nome: v })}
      />
      <HelperText type="error" visible={!!erros.nome}>{erros.nome}</HelperText>

      <TextInput
        label="Descrição"
        value={playlist.descricao}
        onChangeText={v => setPlaylist({ ...playlist, descricao: v })}
        multiline
      />
      <HelperText type="error" visible={!!erros.descricao}>{erros.descricao}</HelperText>

      <TextInput
        label="Gênero"
        value={playlist.genero}
        onChangeText={v => setPlaylist({ ...playlist, genero: v })}
      />

      <TextInput
        label="Cor (#RRGGBB)"
        value={playlist.cor}
        onChangeText={v => setPlaylist({ ...playlist, cor: v })}
      />
      <HelperText type="error" visible={!!erros.cor}>{erros.cor}</HelperText>

      <TextInput
        label="Músicas (separadas por vírgula)"
        value={Array.isArray(playlist.membros) ? playlist.membros.join(',') : playlist.membros}
        onChangeText={v => setPlaylist({ ...playlist, membros: v })}
        multiline
      />

      <Button mode="contained" onPress={salvar} style={{ marginTop: 20 }}>Salvar</Button>
    </ScrollView>
  );
}
