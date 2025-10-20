import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './src/styles/styles';
import AboutMe from './src/components/custom/AboutMe';
import TasbihList from './src/components/custom/TasbihList';
import TeacherMessage from './src/components/custom/TeacherMessage'; // Students create this
import SearchAndAdd from './src/components/custom/SearchAndAdd';
import { STUDENT_NAME, REG_NO } from './src/config/student';
import { initialAzkaar } from './src/data/azkaar';


export default function App() {
  const [azkaar, setAzkaar] = useState(initialAzkaar);
  const [searchText, setSearchText] = useState('');

  const onSetSearch = (text) => {
    setSearchText(text);
  };

  const onZikrAdd = ({ phrase: newZikr, count }) => {
    const existingZikr = azkaar.find((azkar) => azkar.phrase.toLowerCase() === newZikr.toLowerCase());
    if (existingZikr) {
      alert('This Zikr already exists.');
      return;
    }
    
    setAzkaar([...azkaar, { id: azkaar.length.toString(), phrase: newZikr, count: count }]);
  }

  const filteredAzkaar = azkaar.filter((azkar) =>
    azkar.phrase.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AboutMe name={STUDENT_NAME} regNo={REG_NO} />
      <TeacherMessage />
      {/* TODO: after creating the custom/TeacherMessage component, render it here */}
      <TasbihList initialAzkaar={filteredAzkaar} />
      <SearchAndAdd
        searchText={searchText}
        onSetSearch={
          (text) => {
            onSetSearch(text);
          }
        }
        onZikrAdd={onZikrAdd}
      />
    </ScrollView>
  );
}
