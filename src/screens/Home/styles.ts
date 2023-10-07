import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24
    },

    eventName: {
        marginTop: 48,
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },

    eventDate: {
        color: '#6B6B6B',
        fontSize: 16
    },

    input: {
        flex: 1,
        marginRight: 12,
        padding: 16,
        height: 54,
        fontSize: 16,
        color: '#FFF',
        backgroundColor: '#1F1E25',
        borderRadius: 5
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67'
    },

    buttonText: {
        color: '#FFF',
        fontSize: 24
    },

    form: {
        marginTop: 36,
        marginBottom: 42,
        width: '100%',
        flexDirection: 'row',
    },

    listEmptyText: {
        color: '#FFF',
        fontSize: 16,
        textAlign: 'center'
    }
});