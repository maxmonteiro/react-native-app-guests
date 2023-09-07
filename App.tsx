import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Quinta, 7 de Setembro de 2023
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },

  eventName: {
    marginTop: 48,
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold'
  },

  eventDate: {
    marginTop: 48,
    color: '#6B6B6B',
    fontSize: 16
  }
});
