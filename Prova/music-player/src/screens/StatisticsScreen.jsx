import React, { useEffect, useState } from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { BarChart } from 'react-native-chart-kit';
import { getContagens } from '../services/playcount';

export default function StatisticsScreen() {
  const [labels, setLabels] = useState([]);
  const [valores, setValores] = useState([]);

  useEffect(() => {
    async function carregar() {
      const contagens = await getContagens();
      const entradas = Object.values(contagens)
        .sort((a, b) => b.quantidade - a.quantidade)
        .slice(0, 10); // top 10

      setLabels(entradas.map(e => e.nome.slice(0, 10)));
      setValores(entradas.map(e => e.quantidade));
    }

    carregar();
  }, []);

  return (
    <ScrollView>
      <Text variant="titleLarge" style={{ textAlign: 'center', marginTop: 20 }}>Músicas Mais Tocadas</Text>
      <BarChart
        data={{
          labels: labels,
          datasets: [{ data: valores }]
        }}
        width={Dimensions.get('window').width - 16}
        height={280}
        fromZero
        showValuesOnTopOfBars
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
          labelColor: () => '#000'
        }}
        style={{ marginVertical: 30, borderRadius: 16, marginLeft: 8 }}
      />
    </ScrollView>
  );
}
