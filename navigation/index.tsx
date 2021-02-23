import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { View } from '../components/Themed';
import Colors from '../constants/Colors';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import SigninScreen from '../screens/SigninScreen';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ 
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold', fontSize: 22,
        }
    }}>
      <Stack.Screen
        name='Signin'
        component={SigninScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Root" 
      component={BottomTabNavigator}
      options= {{
        title: "ProjectTeach",
        headerRight: () => (
          <View style={{flexDirection: 'row', width: 60, justifyContent: 'space-between', marginRight: 10,}}>
            <AntDesign name="search1" size={22} color="black" />
            <MaterialCommunityIcons name="dots-vertical" size={22} color="black" />
          </View>
        )
      }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
