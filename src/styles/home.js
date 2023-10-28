import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#007AFF', // Tom de azul característico da Apple
  },
  deviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  deviceImage: {
    width: 60,
    height: 60,
    marginRight: 20,
    borderRadius: 8,
  },
  deviceName: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  deviceQuantityInput: {
    width: 60,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginLeft: 'auto',
    marginRight: 10
  },
  addButton: {
    backgroundColor: '#007AFF', // Tom de azul da Apple
    color: 'white',
    padding: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  userDevice: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
    backgroundColor: '#f9f9f9', // Fundo um pouco mais claro
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  totalPower: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#007AFF', // Tom de azul da Apple
  },
  totalCost: {
    color: '#10A103',
  },
  clearButton: {
    backgroundColor: '#FF0000'
  },
});