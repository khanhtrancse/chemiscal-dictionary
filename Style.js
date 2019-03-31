import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        padding: 8,    
    },
    inputText: {
        flex: 1,
        fontSize: 18,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
    },
    resultTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: 'violet'
    },
    searchIcon: {
        width: 16,
        height: 16,
    },
    resultContainer: {
        flex: 1,
        padding: 8,
    },
    resultItem: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    resultKey: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    resultMean: {
        fontSize: 18,
    }
});
