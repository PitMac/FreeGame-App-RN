import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './HomePage';
import ListPage from './ListPage';
import DetailPage from './DetailPage';

export default function Routes() {
  const Stack = createStackNavigator();
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
