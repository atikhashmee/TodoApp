/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import FormView from './pages/FormView';
import ListView from './pages/ListView';

const MainHomePage = props => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: 'blue',
          justifyContent: 'space-between',
          paddingLeft: 10,
          paddingTop: 20,
          width: '100%',
        }}>
        <Icon
          name="bars"
          size={25}
          color="#fff"
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
        />
        <Text style={{fontSize: 25, color: '#fff'}}>Todo App </Text>
        <Text />
      </View>
      <View style={{flex: 12}}>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen
            name="Form"
            component={FormView}
            options={{
              tabBarLabel: 'Form',
              tabBarIcon: ({color, size}) => (
                <Icon name="leaf" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="List"
            component={ListView}
            options={{
              tabBarLabel: 'List',
              tabBarIcon: ({color, size}) => (
                <Icon name="list" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};
export default MainHomePage;
