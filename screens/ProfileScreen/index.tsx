import { CommonActions, useNavigation } from '@react-navigation/core';
import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './style';

const ProfileScreen = () => {

    const [user,setUser] = useState({
        id: '1',
        name: "Mill",
        email: 'nanmanat.v@gmail.com',
        image: 'https://cdn.discordapp.com/attachments/556849985564573696/813762335289901056/Profile.jpg',
    })

    const navigation = useNavigation();

    const signOut = async () => {
        await Auth.signOut();
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    {name: 'Signin'}
                ],
            })
        );
    } 
 
    return (
        <View style={styles.root}>
            <View style={styles.userContianer}>
                <View style={styles.left}>
                    <Image style={styles.userImage} source={{ uri: user.image}} />
                    <View>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.email}>{user.email}</Text>
                    </View>
                </View>
            </View>
            <Pressable onPress={signOut} style= {styles.center}>
                <Text style={{ fontSize:16, color: 'red', fontWeight: 'bold'}}>Log Out</Text>
            </Pressable>
        </View>
    )
}

export default ProfileScreen;
 