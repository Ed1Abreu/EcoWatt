import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileImage: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 20,
    },
    username: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    email: {
      fontSize: 18,
      color: 'gray',
    },
    registeredSince: {
      fontSize: 16,
      marginTop: 10,
    },
    location: {
        fontSize: 16,
        marginTop: 10,
      }
      
  });