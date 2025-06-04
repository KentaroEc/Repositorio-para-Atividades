import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'playlists';

export const getPlaylists = async () => {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const savePlaylists = async (playlists) => {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(playlists));
};

export const addPlaylist = async (playlist) => {
  const playlists = await getPlaylists();
  playlists.push(playlist);
  await savePlaylists(playlists);
};

export const updatePlaylist = async (id, newData) => {
  let playlists = await getPlaylists();
  playlists = playlists.map(p => p.id === id ? { ...p, ...newData } : p);
  await savePlaylists(playlists);
};

export const deletePlaylist = async (id) => {
  let playlists = await getPlaylists();
  playlists = playlists.filter(p => p.id !== id);
  await savePlaylists(playlists);
};
