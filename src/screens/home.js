
// Esses são os imports dos módulos que foram usados nesse aplicativo
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Image } from 'react-native';
import styles from '../styles/home'

// Esses são os importas das imagens dos dispositivos
import lampImage from '../../assets/devices/lamp.webp';
import tvImage from '../../assets/devices/tv.webp';
import acImage from '../../assets/devices/air-conditioning.webp';

// Essa constante é um Array de objetos que tem os dispositivos
const predefinedDevices = [
    { 
        name: 'Lâmpada', 
        power: 0.05, 
        image: lampImage
    },
    { 
        name: 'TV', 
        power: 0.1, 
        image: tvImage
    },
    { 
        name: 'Ar Condicionado', 
        power: 1.2, 
        image: acImage
    },
    
    // Só adicionar mais dispositivos aqui seguindo esse padrão em cima
];

export function Home() {
  
    const [userDevices, setUserDevices] = useState([]);
    const [deviceQuantity, setDeviceQuantity] = useState('');
    const [totalPower, setTotalPower] = useState(0);

    const addDevice = (device) => {
        if (deviceQuantity) {
        const quantity = parseInt(deviceQuantity, 10);
        if (!isNaN(quantity) && quantity > 0) {
            const userDevice = {
            name: device.name,
            power: device.power,
            quantity,
            };
            setUserDevices([...userDevices, userDevice]);
            setTotalPower(totalPower + device.power * quantity);
            setDeviceQuantity('');
        }
        }
    };

    return (
    <View style={styles.container}>
        <Text style={styles.header}>Gerenciador de Dispositivos Eletrônicos</Text>
        <Text style={styles.sectionTitle}>Dispositivos:</Text>
      
        <FlatList
            data={predefinedDevices}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={styles.deviceItem}>
                    <Image source={item.image} style={styles.deviceImage} />
                    <Text style={styles.deviceName}>{item.name}</Text>
                    <TextInput
                        style={styles.deviceQuantityInput}
                        placeholder="Quantidade"
                        value={deviceQuantity}
                        onChangeText={(text) => setDeviceQuantity(text)}
                        keyboardType="numeric"
                    />
                    <Button
                        title="Adicionar"
                        onPress={() => addDevice(item)}
                        style={styles.addButton}
                    />
                </View>
            )}
        />
        <Text style={styles.sectionTitle}>Seus dispositivos adicionados:</Text>
        <FlatList
            data={userDevices}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
            <Text style={styles.userDevice}>{item.quantity} x {item.name} - {item.quantity * item.power} kW</Text>
            )}
        />
        <Text style={styles.totalPower}>Média de Quilowatt gasto em 1 dia: {totalPower.toFixed(2)} kW</Text>
    </View>
  );
}