import { useState } from 'react';
import { 
  Text, 
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';

import  { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'; 

import Participant from '../../components/Participant'

export default function Home() {
const [participants, setParticipants] = useState<string[]>([])


function addParticipant() {
  if (participants.includes('Teste 1')) {
    return Alert.alert('Participante Existe', 'Já existe um participante com esse nome')
  }

  setParticipants(prevState => [...prevState, 'Ana'])
}

function removeParticipant(name: string) {
  Alert.alert(
    'Remover', `Confirmar exclusão do participante: ${name}?`,[
      {
        text: 'Sim',
        onPress: () => Alert.alert('Participante excluído!')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]
  )
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

    <FlatList
      data={participants}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <Participant 
          key={item}
          name={item}
          onRemove={() => removeParticipant(item)}
        />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={styles.listEmptyText}>
          Nenhum participante confirmado.
        </Text>
      )}
    />
  </View>
);
}