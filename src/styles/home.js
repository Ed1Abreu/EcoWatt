import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
      },
      sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
        color: '#333',
      },
      deviceItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
      },
      deviceImage: {
        width: 40, // Ajuste o tamanho da imagem conforme necessário
        height: 40, // Ajuste o tamanho da imagem conforme necessário
        marginRight: 10,
      },
      deviceName: {
        flex: 1,
        fontSize: 16,
        color: '#333',
      },
      deviceQuantityInput: {
        width: 80,
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 5,
        marginLeft: 10,
      },
      addButton: {
        marginLeft: 10,
        backgroundColor: '#007BFF',
        color: 'white',
      },
      userDevice: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
        backgroundColor: '#f1f1f1', // Cor de fundo
        borderRadius: 10, // Borda arredondada
        padding: 15, // Espaçamento interno
        flexDirection: 'row', // Alinhe o conteúdo horizontalmente
        justifyContent: 'space-between', // Espaço uniforme entre elementos
        alignItems: 'center', // Centralize verticalmente
        shadowColor: 'rgba(0, 0, 0, 0.1)', // Cor da sombra
        shadowOffset: {
          width: 0,
          height: 2, // Sutil deslocamento de sombra
        },
        shadowOpacity: 0.8, // Opacidade da sombra
        shadowRadius: 4, // Raio da sombra
        elevation: 2, // Sombreamento no Android
      },
      totalPower: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#333',
      },
      totalCost: {
        fontSize: 20, // Ajuste o tamanho da fonte conforme desejado
        fontWeight: 'bold', // Pode ser negrito
        marginTop: 10, // Ajuste a margem conforme desejado
        color: 'green', // Escolha uma cor apropriada
      },

});