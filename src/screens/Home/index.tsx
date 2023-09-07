import { 
    Text, 
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

import  { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'; 

export default function Home() {

  function addParticipant() {
    alert('adicionar')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Quinta, 7 de Setembro de 2023
      </Text>

      <View style={styles.form}>
        <TextInput 
            style={styles.input} 
            placeholder='Nome do participante'
            placeholderTextColor='#686868'
        />

        <TouchableOpacity 
            style={styles.button}
            onPress={addParticipant}
        >
            <AntDesign 
                name='plus' 
                style={styles.buttonText}>
            </AntDesign>
        </TouchableOpacity>
      </View>
    </View>
  );
}