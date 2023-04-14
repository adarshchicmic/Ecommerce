import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useRef } from 'react';
const data = [
  1,
  4,
  3,
  6,
  78,
  879,
  3,
  45,
  7,
  8,
  9,
  10,
  90,
  90,
  902,
  902,
  1,
  4,
  3,
  6,
  78,
  879,
  3,
  45,
  ,
  7,
  8,
  9,
  10,
  90,
  90,
  902,
  902,
];
const ToDelete = () => {
  const ScrollViewref = useRef();
  useEffect(() => {
    console.log(ScrollViewref, 'dfjkl;gndfjks;hajsgkshdfgsdfjkl;');
  }, [ScrollViewref]);
  console.log(ScrollViewref);
  useEffect(() => {
    setTimeout(() => {
      handleAction();
    }, 1000);
  }, []);
  const handleAction = () => {
    ScrollViewref.current?.scrollToEnd();
  };
  return (
    <ScrollView
      ref={ScrollViewref}
      //   onMomentumScrollBegin={() => {
      //     ScrollViewref.current?.scrollToEnd();
      //   }}
    >
      {data.map(item => (
        <Text style={{ fontSize: 100 }}>{item}</Text>
      ))}
    </ScrollView>
  );
};

export default ToDelete;
