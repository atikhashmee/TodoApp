/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';

function Item({id, title, completed, selected, onSelect}) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        {backgroundColor: selected ? '#d3d3d4' : '#d3d3d3'},
      ]}>
      <Text
        style={[
          styles.title,
          {textDecorationLine: completed ? 'line-through' : 'none'},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
const ListView = () => {
  const [todos, setTodos] = React.useState([]);
  const [selected, setSelected] = React.useState(new Map());
  const [spinner, setSpinner] = React.useState(false);

  const onSelect = React.useCallback(
    id => {
      setSpinner(true);
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      //Alert.alert('Hell world');
      fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
        method: 'PUT',
        body: JSON.stringify({
          completed:
            todos.find(it => it.id == id) ??
            !todos.find(it => it.id  == id).completed,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(res => res.json())
        .then(res => {
          console.log(res, 'res');
          todos.forEach(it => {
            if (it.id === id) it.completed = !it.completed;
          });
          setSpinner(false);
        });
      setSelected(newSelected);
      //console.log(selected, 'item', newSelected);
    },
    [selected, todos],
  );

  React.useEffect(() => {
    setSpinner(true);
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res => {
        setTodos(res);
        console.log('addd');
        setSpinner(false);
      });
  }, []);
  return (
    <SafeAreaView>
      <Spinner
          visible={spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <Item
            id={item.id}
            title={item.title}
            completed={item.completed}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ListView;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#d4d4d4',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 25,
  },
});
