import { Zocial } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        height: 175,
        resizeMode: "contain",
    },
    userContianer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        marginVertical: 10,
        width: '100%',
    },
    userImage: {
        height: 65,
        width: 65,
        marginRight: 10,
        borderRadius: 50,
    },
    name:{
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 18,
    },
    email:{
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    center: {
        marginTop: "auto",
        marginBottom: 10,
        alignItems: 'center',
        width: '100%',
        fontSize: 20
    } 
});

export default styles;
