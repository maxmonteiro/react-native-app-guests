import { 
    View, 
    Text,
    TouchableOpacity
} from "react-native";

import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons'; 

export default function Participant() {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                John Doe
            </Text>

            <TouchableOpacity style={styles.button}>
                <AntDesign 
                    name='close' 
                    style={styles.buttonText}>
                </AntDesign>
            </TouchableOpacity>
        </View>
    );
}