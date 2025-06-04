import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'playcounts';

export const registrarExecucao = async (musica) => {
  const data = await AsyncStorage.getItem(KEY);
  const counts = data ? JSON.parse(data) : {};

  if (!counts[musica.id]) {
    counts[musica.id] = {
      nome: musica.filename,
      quantidade: 1
    };
  } else {
    counts[musica.id].quantidade += 1;
  }

  await AsyncStorage.setItem(KEY, JSON.stringify(counts));
};

export const getContagens = async () => {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : {};
};
