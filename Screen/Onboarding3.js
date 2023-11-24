import React from "react";
import { View, Dimensions, Image, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import Color from "../Const/Color";
import Images from "../Const/Images";
import Button from "../Const/Button";
import { StatusBar } from "react-native";

const Onboarding3 = ({ navigation }) => {
  const { width } = Dimensions.get("window");
  const controlX = width / 2;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor={Color.primary} />
      {/* The image page */}
      <View
        style={{
          flex: 1,
          backgroundColor: Color.primary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={Images.Group2}
          style={{ height: "60%" }}
          resizeMode="contain"
        />
        <Text
          style={{
            textTransform: "uppercase",
            color: Color.white,
            fontSize: 30,
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
          Finendar
        </Text>
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
          //   viewBox={`0 0 ${width} 200`}
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
        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 25,
              fontFamily: "Regular",
              fontWeight: "600",
              lineHeight: 33,
              marginBottom: 10,
            }}
          >
            Manage and Join Projects
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              fontFamily: "Thin",
              lineHeight: 27,
              fontWeight: "600",
            }}
          >
            
            Take control of projects, participate in surveys {"\n"} and feedback questionnaire.
          </Text>
          <View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginTop: "5%",
              }}
            >
            
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: Color.grey,
                  borderRadius: 10,
                  marginHorizontal: 5,
                }}
              ></View>
             
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: Color.grey,
                  borderRadius: 10,
                  marginHorizontal: 5,
                }}
              ></View>
                 <View
                style={{
                  width: 26,
                  height: 9,
                  backgroundColor: Color.primary,
                  borderRadius: 25,
                  marginHorizontal: 5,
                }}
              ></View>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20%",
              }}
            >
              <Button
                title="Continue"
                onPress={() => navigation.navigate('Sign')}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding3;