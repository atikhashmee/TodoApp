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
import Icon from 'react-native-vector-icons/FontAwesome';
import MainHomePage from './src/MainHomePage';

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
