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

    const signOut = () => {
        console.warn("Sign out")
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
                <Pressable onPress={signOut} style= {styles.center}>
                    <Text>Sign Out</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default ProfileScreen;
 