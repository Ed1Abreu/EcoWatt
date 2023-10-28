import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/EnergyTips'

export function EnergyTips(){
  const energySavingTips = [
    "Troque lâmpadas incandescentes por LED",
    "Desligue aparelhos da tomada quando não estiverem em uso",
    "Utilize eletrodomésticos com selo de eficiência energética",
    "Aproveite a luz natural e diminua o uso de luzes artificiais",
    // Adicione mais dicas conforme necessário
  ];

  const usefulLinks = [
    { title: 'Dicas de Economia - Site 1', url: 'https://www.exemplo.com/dicas-economia' },
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

    <Text style={styles.linksTitle}>Sites Úteis:</Text>
    
    <View style={styles.linksContainer}>
        {usefulLinks.map((link, index) => (
            <TouchableOpacity key={index} onPress={() => alert(`Link para: ${link.url}`)}>
                <Text style={styles.link}>{link.title}</Text>
            </TouchableOpacity>
        ))}
    </View>
  </View>
  );
};