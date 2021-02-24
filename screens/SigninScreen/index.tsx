import { isFederatedSignInOptions } from '@aws-amplify/auth/lib-esm/types';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Auth, Hub } from 'aws-amplify';
import React, { useEffect } from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './style';
const googleBottonImage = require('../../assets/images/google-button.png');

const SigninScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const fetchUser = async () => {
            const user = await Auth.currentAuthenticatedUser();
            if (user) {
                console.log('user data')
                console.log(user);
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [
                            {name: 'Root'}
                        ],
                    })
                );
            }

        }

        fetchUser();
    }, [])

    useEffect(() => {
        Hub.listen("auth", ({ payload: { event, data } }) => {
            if (event === "signIn") {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [
                            {name: 'Root'}
                        ],
                    })
                );
            }
        });
    }, [])

    const signInGoogle = async () =>{
        await Auth.federatedSignIn({provider: "Google"});
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
 