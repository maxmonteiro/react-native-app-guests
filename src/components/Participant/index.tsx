import { 
    View, 
    Text,
    TouchableOpacity
} from "react-native";

import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons'; 

type Props = {
    name: string;
}

export default function Participant({ name }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
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