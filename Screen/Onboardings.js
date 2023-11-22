import React, { useState } from "react";
import { View, Image, StyleSheet, Dimensions, FlatList } from "react-native";
import DotNavigation from "../Const/DotNavigation"; // Assuming you have a DotNavigation component
import Images from "../Const/Images";

const OnboardingCarousel = () => {
  const { width } = Dimensions.get("window");
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    { id: "1", image: Images.Group },
    { id: "2", image: Images.Group1},
    { id: "3", image: Images.Group2},
    // Add more images as needed
  ];

  const handlePageChange = (index) => {
    setCurrentIndex(index);
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <View style={{ width, height: "50%" }}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
      </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onScroll={(event) => {
          const offsetX = event.nativeEvent.contentOffset.x;
          const index = Math.floor(offsetX / width);
          handlePageChange(index);
        }}
      />
      
      <DotNavigation totalScreens={data.length} currentIndex={currentIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "70%",
    height: "100%",
  },
});

export default OnboardingCarousel;


