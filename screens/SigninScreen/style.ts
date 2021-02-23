import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15,
    },
    lable: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    googleButton: {
        marginTop: 'auto',
        marginBottom: 60,
        width: '60%'
    },
    buttonImage: {
        width: '100%',
        resizeMode: 'contain'
    },
});

export default styles;
