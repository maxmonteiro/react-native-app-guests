import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#1F1E25'
    },

    name: {
        flex: 1,
        marginLeft: 16,
        fontSize: 16,
        color: '#FFF',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44'
    },

    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
})