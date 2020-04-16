/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';

const FormView = () => {
  const [todo, setTodo] = React.useState({
    userId: 10,
    id: 1,
    title: 'none',
    completed: false,
  });
  const [saved, setSaved] = React.useState(null);

  const activityShow = <ActivityIndicator size={50} color="blue" />;
  const successMessage = (
    <Text style={{color: 'blue'}}>Data has been saved</Text>
  );
  let afterEffect;
  if (saved == true) {
    afterEffect = activityShow;
  } else if (saved == false) {
    afterEffect = successMessage;
  } else {
    afterEffect = <Text />;
  }

  let textInput = React.createRef();
  function submitForm() {
    setSaved(true);
    if (todo.title == '') {
      Alert.alert('Title can not be an empty field');
      setSaved(null);
      return false;
    }

    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({...todo}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log(json, 'saved data');
        setSaved(false);
        setTodo({title:''});
      });

    //console.log('hello wrold', todo);
  }
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
        onChangeText={text => {
          setTodo({...todo, title: text});
        }}
        value={todo.title}
      />
      <View style={{width: '50%', marginVertical: 5}}>
        <Button color="blue" title="Save" onPress={() => submitForm(this)} />
      </View>
      {afterEffect}
    </View>
  );
};
export default FormView;
