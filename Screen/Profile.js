// import React, { useState, useEffect } from "react";
// import { Button, Image, View, Platform, TouchableOpacity } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import Images from "../Const/Images";
// import Color from "../Const/Color";
// import Group5 from "../assets/Images/Group5.png"
// import Entypo from 'react-native-vector-icons/Entypo'

// export default function ImagePickerExample() {
//   const [image, setImage] = useState(null);

//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//     }
//   };

//   return (
//     <View style={{ flex: 1, }}>
     
//      <View
//         style={{ flex: 0.7, justifyContent: "center", alignItems: "center" }}
//       >
//         <View style={{}}>
//           <Image
//             style={{
//               width: 120,
//               height: 120,
//               borderRadius: 60,
//               borderColor: Color.dark,
//               borderWidth: 1,
//             }}
//             // source={Images.Group}
//             // source={{ uri: image }}
//             source={image ? {uri: image} : Group5}
//             resizeMode="cover"
//           />
//           <TouchableOpacity
//             style={{ alignItems: "flex-end", top: "-20%" }}
//             onPress={pickImage}
//           >
//             <Entypo name="camera" size={35} color={Color.primary} />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }


import React, { useState, useEffect } from "react";
import { Image, View, TouchableOpacity, Dimensions, StatusBar } from "react-native";
import Svg, { Path } from "react-native-svg";
import * as ImagePicker from "expo-image-picker";
import Color from "../Const/Color";
import Group5 from "../assets/Images/Group5.png";
import Entypo from 'react-native-vector-icons/Entypo';
import Images from "../Const/Images";

const Profile = ({ navigation }) => {
    const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const { width } = Dimensions.get("window");
  const controlX = width / 2;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor={Color.primary} />
      <View
        style={{
          flex: 1.3,
          backgroundColor: Color.primary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        <View style={{height: "60%", justifyContent:"center", alignItems:"center" , width:"100%"}}>
        <Image
          source={Images.Group7}
          style={{ height:"100%", width:"100%"}}
          resizeMode="contain"
        />

        </View>
      
      </View>

      {/* The text page */}
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <Svg
          height={100}
          width={width}
          style={{
            position: "absolute",
            top: -100,
          }}
        >
          <Path
            d={`M 0 20 Q ${controlX} 130 ${width} 20 L ${width} 100 L 0 100 Z`}
            fill="white"
          />
        </Svg>
        <View style={{ top:"-25%", justifyContent: "center", alignItems: "center" }}>
          <View style={{}}>
            <View  style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                borderColor: Color.white,
                borderWidth: 4,
              }}>

            <Image
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 60,
              
               
              }}
              source={image ? { uri: image } : Group5}
              resizeMode="contain"
            />
            </View>
            <TouchableOpacity
              style={{ alignItems: "flex-end", top: "-25%", zIndex: 99}}
              onPress={pickImage}
            >
              <Entypo name="camera" size={30} color={Color.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
