import { View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import styles from "./SubViewStyles"


const Switch = ({ selectedIndex, onSegmentChange }) => {

  const items = ['Posts', 'Accounts'];

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          children={<Text style={styles.segmentLabel}>{item}</Text>}
          style={[
            styles.segment,
            selectedIndex === index ? styles.selectedSegment : null,
          ]}
          onPress={() => {
            if (selectedIndex !== index) {
              onSegmentChange(index);
            }
          }}
        >
        </TouchableOpacity>
      ))}
    </View>
  );
};


export default Switch;