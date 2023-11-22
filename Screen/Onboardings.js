// import React from 'react';
// import { StatusBar } from 'react-native';
// import { View,
//    Text, FlatList,
//     Image,SafeAreaView,
//      Dimensions, StyleSheet,
//     TouchableOpacity } from 'react-native';
// import Color from '../Const/Color';
// import Svg, { Path } from 'react-native-svg';
// import Images from '../Const/Images';
// import { SIZES } from '../Const/Size';

// const {width, height} = Dimensions.get('window');

// const slides = [
//   {
//     id: "1",
//     image: Images.Group,
//     title: "Best Digital Solution",
//     subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     id: "2",
//     image: Images.Group1,
//     title: "Achieve Your Goals",
//     subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     id: "3",
//     image: Images.Group2,
//     title: "Increase Your Value",
//     subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
// ];

// const Slide = ({item}) => {
//   const controlX = SIZES.width / 2;
//   return <View style={{ flex: 1 , justifyContent:"center",}}>
//      <View
//          style={{
//           flex: 3,
//            backgroundColor: Color.primary,
          
//          }}
//        >
//           <Image
//          source={item.image}
//          style={{ width, resizeMode: 'contain'}}
//        />
//        <Text style={{ textAlign: 'center', color: Color.white, textTransform: 'uppercase', fontSize: 36, letterSpacing: 5, fontFamily: 'Black',marginTop: 30 }}>FINENDAR</Text>
//       </View>

//       {/* Text */}
//       <View
//          style={{
//            flex: 1,
           
          
//          }}
//        >
//          <Svg
//           height={100}
//            width={SIZES.width}
//            // viewBox={`0 0 ${SIZES.width} 200`}
//            style={{
//              position: "absolute",
//              top: -100,
//            }}
//          >
//            <Path             d={`M 0 20 Q ${controlX} 130 ${SIZES.width} 20 L ${SIZES.width} 100 L 0 100 Z`}
//              fill="white"
//            />
//          </Svg>
        
//        </View>
//   </View>
// }


// const Onboardings = ({navigation}) => {

//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: Color.white}}>
//        <StatusBar barStyle="light-content" backgroundColor={Color.primary}/>
//        <FlatList
//        data={slides} contentContainerStyle={{height: height * 0.75}}
//        horizontal
//        showsHorizontalScrollIndicator={false}
//        renderItem={({item}) => <Slide item={item}/>}/>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({})
// export default Onboardings;

// import React from "react";
// import { View } from "react-native";
// import Svg, { Path } from "react-native-svg";
// import { SIZES } from "../Const/Size";
// import Color from "../Const/Color";
// import Images from "../Const/Images";

// const slides = [
//   {
//     id: "1",
//     image: Images.Group,
//     title: "Best Digital Solution",
//     subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     id: "2",
//     image: Images.Group1,
//     title: "Achieve Your Goals",
//     subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     id: "3",
//     image: Images.Group2,
//     title: "Increase Your Value",
//     subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
// ];

// const MyComponent = ({item}) => {
//   const controlX = SIZES.width / 2;
//   return (
//     <View style={{ flex: 1 }}>
//       {/* The image page */}
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: Color.primary,
//         }}
//       >
//          <Image
//         source={item?.image}
//         style={{height: '75%', width, resizeMode: 'contain'}}
//       />
//       </View>
//       {/* The text page */}
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: "blue",
//         }}
//       >
//         <Svg
//           height={100}
//           width={SIZES.width}
//           // viewBox={`0 0 ${SIZES.width} 200`}
//           style={{
//             position: "absolute",
//             top: -100,
//           }}
//         >
//           <Path
//             d={`M 0 20 Q ${controlX} 130 ${SIZES.width} 20 L ${SIZES.width} 100 L 0 100 Z`}
//             fill="blue"
//           />
//         </Svg>
//        
//       </View>
//     </View>
//   );
// };

// export default MyComponent;


import React from 'react';
import { StatusBar, View, Text, FlatList, Image, SafeAreaView, Dimensions, StyleSheet } from 'react-native';
import Color from '../Const/Color';
import Svg, { Path } from 'react-native-svg';
import Images from '../Const/Images';
import { SIZES } from '../Const/Size';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: "1",
    image: Images.Group,
    title: "Best Digital Solution",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "2",
    image: Images.Group1,
    title: "Achieve Your Goals",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "3",
    image: Images.Group2,
    title: "Increase Your Value",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Slide = ({ item }) => {
  const controlX = SIZES.width / 2;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3, backgroundColor: Color.primary }}>
       
      </View>

      {/* SVG Curve */}
      <Svg
        height={100}
        width={SIZES.width}
        // viewBox={`0 0 ${SIZES.width} 200`}
        style={{
          position: 'absolute',
          bottom: 0,
        }}
      >
        <Path
          d={`M 0 20 Q ${controlX} 130 ${SIZES.width} 20 L ${SIZES.width} 100 L 0 100 Z`}
          fill="white"
        />
      </Svg>
    </View>
  );
};

const Onboardings = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
      <StatusBar barStyle="light-content" backgroundColor={Color.primary} />
      <FlatList
        data={slides}
        contentContainerStyle={{ height: height * 0.75 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default Onboardings;

