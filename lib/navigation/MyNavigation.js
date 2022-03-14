import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../pages/HomePage';
import ListPage from '../pages/ListPage';
import DetailPage from '../pages/DetailPage';

export default function Routes() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            title: 'FREE GAMES',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
        />
        <Stack.Screen
          name="List"
          component={ListPage}
          options={({route}) => ({
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            title: route.params.title,
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: 'black',
            },
          })}
        />
        <Stack.Screen
          name="Detail"
          component={DetailPage}
          options={({route}) => ({
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            title: route.params.title,
            headerTitleStyle: {
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: 'black',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
