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
const [participantName, setParticipantName] = useState('')

function addParticipant() {
  if (participants.includes(participantName)) {
    return Alert.alert('Participante Existe', 'Já existe um participante com esse nome')
  }

  setParticipants(prevState => [...prevState, participantName])
  setParticipantName('')
}

function removeParticipant(name: string) {
  Alert.alert(
    'Remover', `Confirmar exclusão do participante: ${name}?`,[
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
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
          value={participantName}
          onChangeText={text => setParticipantName(text)}
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