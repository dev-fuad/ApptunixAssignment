import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, CheckBox, Platform } from 'react-native';

import { checkListStyles as styles } from './styles';

const DummyList = [
  { key: '1', text: 'Assignment 1', selected: false },
  { key: '2', text: 'Assignment 2', selected: false },
  { key: '3', text: 'Assignment 3', selected: false },
  { key: '4', text: 'Assignment 4', selected: false },
  { key: '5', text: 'Assignment 5', selected: false },
  { key: '6', text: 'Assignment 6', selected: false },
  { key: '7', text: 'Assignment 7', selected: false },
  { key: '8', text: 'Assignment 8', selected: false },
  { key: '9', text: 'Assignment 9', selected: false },
];

const useCheckList = initialState => {
  const [checkList, setCheckList] = useState(initialState);

  const checkItem = key => {
    const newList = checkList.map(item => ({
      ...item,
      selected: item.key === key ? !item.selected : item.selected,
    }));
    setCheckList(newList);
  };

  return [checkList, checkItem];
};

const CheckListTab = () => {
  const [checkList, checkItem] = useCheckList(DummyList);

  const selectedCount = (() => {
    return checkList.filter(item => item.selected).length;
  })();

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.text}>{item.text}</Text>
      <TouchableOpacity
        style={styles.check}
        onPress={() => checkItem(item.key)}
      >
        <Text>{item.selected ? '✓' : '☐'}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.total}>{`Total selected: ${selectedCount}`}</Text>
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.listContent}
        data={checkList}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CheckListTab;
