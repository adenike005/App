// DotNavigation.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Color from "../Const/Color"
const DotNavigation = ({ currentIndex, totalScreens }) => {
  const dots = Array.from({ length: totalScreens }, (_, index) => index);

  return (
    <View style={styles.container}>
      {dots.map((dotIndex) => (
        <View
          key={dotIndex}
          style={[
            styles.dot,
            { backgroundColor: currentIndex === dotIndex ? Color.primary : 'gray' },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default DotNavigation;
