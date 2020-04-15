/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, Linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const FormView = () => {
  return (
    <View style={{backgroundColor: 'green', flex: 1}}>
      <Text>Hell oworld form View</Text>
    </View>
  );
};
const ListView = () => {
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <Text>Hell oworld List View</Text>
    </View>
  );
};

const MainHomePage = () => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={{flex:1}}>
    <View style={{height:10,backgroundColor:'blue',width:100}}></View>
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
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={ListView}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="alarm-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
    </View>
  );
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          backgroundColor: '#f50057',
          height: 140,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 30}}>Header</Text>
      </View>
      <DrawerItem
        label="IconHeader"
        onPress={() => Linking.openUrl('https://google.com')}
      />
      <DrawerItem
        label="Help"
        onPress={() => Linking.openUrl('https://google.com')}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType={'front'}
        drawerStyle={{
          width: 240,
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MainHomePage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
