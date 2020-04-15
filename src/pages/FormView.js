/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const FormView = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
      }}>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: '80%'}}
        placeholder="Todo"
      />
      <View style={{width: '50%', marginVertical: 5}}>
        <Button color="blue" title="Save" />
      </View>
    </View>
  );
};
export default FormView;
