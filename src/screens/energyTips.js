import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/EnergyTips'

export function EnergyTips(){
  const energySavingTips = [
    "Troque lâmpadas incandescentes por LED",
    "Desligue aparelhos da tomada quando não estiverem em uso",
    "Utilize eletrodomésticos com selo de eficiência energética",
    "Aproveite a luz natural e diminua o uso de luzes artificiais",
    "Use aparelhos elétricos, como máquinas de lavar roupa e lava-louças, apenas com cargas completas para otimizar o uso de energia.",
    "Troque telas tradicionais por telas de LED, que consomem menos energia.",
    "Desconecte Carregadores Inativos.",
    "Aproveite a Ventilação Natural.",
    "Desligue Luzes ao Sair de um Ambiente."
    // Adicione mais dicas conforme necessário
  ];

  const usefulLinks = [
    { title: 'Embracon', url: 'https://www.embracon.com.br/blog/14-dicas-de-economia-para-colocar-em-pratica' },
    { title: 'Energia Sustentável - Site 2', url: 'https://www.exemplo.com/energia-sustentavel' },
    // Adicione mais links conforme necessário
  ];

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Dicas de Economia de Energia</Text>

    <ScrollView style={styles.tipsContainer}>
        {energySavingTips.map((tip, index) => (
            <View key={index}>
                <Text style={styles.tip}>{`${index + 1}. ${tip}`}</Text>
                {index !== energySavingTips.length - 1 && <View style={styles.divider} />}
            </View>
        ))}
    </ScrollView>

    
  </View>
  );
};