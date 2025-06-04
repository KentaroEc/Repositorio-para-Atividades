import React, { useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { addPlaylist } from '../services/storage';
import { v4 as uuidv4 } from 'uuid';

export default function CreatePlaylistScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [genero, setGenero] = useState('');
  const [cor, setCor] = useState('');
  const [membros, setMembros] = useState('');

  const [erros, setErros] = useState({});

  const validar = () => {
    let e = {};

    if (!nome || nome.length < 3) e.nome = 'Nome deve ter pelo menos 3 caracteres';
    if (!descricao || descricao.length < 10) e.descricao = 'Descrição deve ter pelo menos 10 caracteres';
    if (cor && !/^#([0-9A-Fa-f]{6})$/.test(cor)) e.cor = 'Cor deve estar no formato hexadecimal (#RRGGBB)';

    setErros(e);
    return Object.keys(e).length === 0;
  };

  const salvar = async () => {
    if (!validar()) return;

    const nova = {
      id: uuidv4(),
      nome,
      descricao,
      genero,
      cor,
      membros: membros.split(',').map(m => m.trim())
    };

    await addPlaylist(nova);
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <TextInput label="Nome" value={nome} onChangeText={setNome} />
      <HelperText type="error" visible={!!erros.nome}>{erros.nome}</HelperText>

      <TextInput label="Descrição" value={descricao} onChangeText={setDescricao} multiline />
      <HelperText type="error" visible={!!erros.descricao}>{erros.descricao}</HelperText>

      <TextInput label="Gênero" value={genero} onChangeText={setGenero} />

      <TextInput label="Cor (#RRGGBB)" value={cor} onChangeText={setCor} />
      <HelperText type="error" visible={!!erros.cor}>{erros.cor}</HelperText>

      <TextInput label="Músicas (separadas por vírgula)" value={membros} onChangeText={setMembros} multiline />

      <Button mode="contained" onPress={salvar} style={{ marginTop: 20 }}>Salvar</Button>
    </ScrollView>
  );
}
