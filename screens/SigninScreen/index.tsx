import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './style';
const googleBottonImage = require('../../assets/images/google-button.png');

const SigninScreen = () => {
    const signInGoogle = () =>{

    }
    return (
        <View style={styles.root}>
            <Text style={styles.header}>Welcome</Text>
            <Pressable onPress={signInGoogle} style={styles.googleButton}>
                <Image style={styles.buttonImage} source={googleBottonImage} />
            </Pressable>
        </View>
    )
}

export default SigninScreen;
 