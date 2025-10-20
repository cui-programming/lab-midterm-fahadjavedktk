import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { styles } from '../../styles/styles';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';


/**
 * Custom/SearchAndAdd
 * Students implement:
 *  - a text box to add a new zikr (phrase only, count starts at 0)
 *  - a search box to filter existing azkaar by phrase
 *  - use only components from 'ui' for inputs and buttons
 *  - lifting state up if needed
 */
export default function SearchAndAdd({ onZikrAdd, onSetSearch, searchText }) {
  const [newZikr, setNewZikr] = useState('');

  const addZikr = () => {
    if (newZikr.trim()) {
      onZikrAdd({ phrase: newZikr.trim(), count: 0 });
      setNewZikr('');
    }
  };
  
  return (
    <View style={styles.section}>
      {/* TODO: Implement search and add UI here using ui/TextInput and ui/Button */}

      <TextInput
        placeholder="Search Zikr"
        value={searchText}
        onChangeText={(text) => {
          onSetSearch(text);
        }}
        style={styles.textInput}
      />

      <TextInput
        placeholder="Add New Zikr"
        value={newZikr}
        onChangeText={setNewZikr}
        style={styles.textInput}
      />
      <Button style={styles.addZikrButton} children="Add Zikr" onPress={addZikr} />
      
    </View>
  );
}
