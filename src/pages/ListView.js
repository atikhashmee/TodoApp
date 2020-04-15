/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';

function Item({id, title, selected, onSelect}) {
  return (
    <TouchableOpacity
      /* onPress={() => onSelect(id)} */
      onPress={() => {
        Alert.alert('Hell world');
      }}
      style={[
        styles.item,
        {backgroundColor: selected ? '#6e3b6e' : '#d3d3d3'},
      ]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
const ListView = () => {
  const [todos, setTodos] = React.useState([]);
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res => {
        setTodos(res);
      });
  }, []);
  return (
    <SafeAreaView>
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <Item
            id={item.id}
            title={item.title}
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
