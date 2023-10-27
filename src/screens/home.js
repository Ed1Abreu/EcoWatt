
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
    
    // Só adicionar mais dispositivos aqui seguindo esse padrão de cima
];

export function Home() {
  
    const [userDevices, setUserDevices] = useState([]);
    const [deviceQuantity, setDeviceQuantity] = useState('');
    const [totalPower, setTotalPower] = useState(0);
    const [deviceQuantities, setDeviceQuantities] = useState({});

    const addDevice = (device) => {
        if (deviceQuantities[device.name]) {
            
            const quantity = parseInt(deviceQuantities[device.name], 10);
            
            if (!isNaN(quantity) && quantity > 0) {
                const userDevice = {
                    name: device.name,
                    power: device.power,
                    quantity,
                };

                setUserDevices([...userDevices, userDevice]);
                setTotalPower(totalPower + device.power * quantity);
                setDeviceQuantities({ ...deviceQuantities, [device.name]: '' });
            }
        }
};


    return (
    <View style={styles.container}>
        <Text style={styles.header}>Gerenciador de Dispositivos Eletrônicos</Text>
        <Text style={styles.sectionTitle}>Dispositivos:</Text>
      
       {/* Aqui nessa flatList tá a renderização dos dispositivos cadastrados*/}
        
       {predefinedDevices.map((device) => (
            <View style={styles.deviceItem} key={device.name}>
                
                <Image source={device.image} style={styles.deviceImage} />
                <Text style={styles.deviceName}>{device.name}</Text>
                
                <TextInput
                    style={styles.deviceQuantityInput}
                    placeholder="Insira"
                    value={deviceQuantities[device.name]}
                    onChangeText={(text) => {
                    setDeviceQuantities({ ...deviceQuantities, [device.name]: text });
                }}

                keyboardType="numeric"
                />
                
                <Button
                    title="Adicionar"
                    onPress={() => addDevice(device)}
                    style={styles.addButton}
                />
            
            </View>
        ))}

        
        <Text style={styles.sectionTitle}>Seus dispositivos adicionados:</Text>
        {/* Essa aqui renderiza os dispositivos que o usuário adiciona no App */}
        
        <FlatList
            data={userDevices}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
            <Text style={styles.userDevice}>{item.quantity} x {item.name} - {(item.quantity * item.power).toFixed(2)} kW</Text>
            )}
        />
        <Text style={styles.totalPower}>Média de Quilowatt gasto em 1 dia: {totalPower.toFixed(2)} kW</Text>
    </View>
  );
}