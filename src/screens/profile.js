import React from "react";
import { View, Text, Image  } from "react-native";
import styles from '../styles/profile'

export function Profile(){
    
    const user = {
        name: 'João da Silva',
        email: 'joao.silva@gmail.com',
        location: 'Florianópolis, Santa Catarina',
        registeredSince: 'Registrado desde 17/08/2023',
    }
    
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/user.png')}
                style={styles.profileImage}
            />
            <Text style={styles.username}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
            <Text style={styles.location}>{user.location}</Text>
            <Text style={styles.registeredSince}>{user.registeredSince}</Text>
        </View>
    )
}