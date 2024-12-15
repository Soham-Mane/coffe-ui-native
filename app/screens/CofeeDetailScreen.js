import {
    Dimensions,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import { useNavigation, useRoute } from '@react-navigation/native'
  import { Ionicons } from "@expo/vector-icons";
import Colors from "../config/Colors";
  import SPACING from "../config/SPACING";
  import { BlurView } from "expo-blur";
  
  const { height, width } = Dimensions.get("window");
  
  const sizes = ["S", "M", "L"];
  
  const CoffeeDetailsScreen = ({navigation}) => {
    // const navigation=useNavigation();
    const route=useRoute();
    const {coffee}=route.params;
    const [activeSize, setActiveSize] = useState(null);
    return (
      <>
        <ScrollView>
          <SafeAreaView>
            <ImageBackground
              source={coffee.image}
              style={{
                height: height / 2 + SPACING * 2,
  
                justifyContent: "space-between",
              }}
              imageStyle={{
                borderRadius: SPACING * 3,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: SPACING * 2,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.dark,
                    padding: SPACING,
                    borderRadius: SPACING * 1.5,
                  }}
                >
                  <Ionicons
                    onPress={()=>navigation.navigate("Home")}
                    name="arrow-back"
                    color={Colors.light}
                    size={SPACING * 2}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.dark,
                    padding: SPACING,
                    borderRadius: SPACING * 1.5,
                  }}
                >
                  <Ionicons
                    name="heart"
                    color={Colors.light}
                    size={SPACING * 2}
                  />
                </TouchableOpacity>
              </View>
  
              <View
                style={{
                  borderRadius: SPACING * 3,
                  overflow: "hidden",
                }}
              >
                <BlurView
                  intensity={80}
                  tint="dark"
                  style={{
                    padding: SPACING * 2,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontSize: SPACING * 2,
                        color: Colors.white,
                        fontWeight: "600",
                        marginBottom: SPACING,
                      }}
                    >
                      {coffee.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: SPACING * 1.8,
                        color: Colors["white-smoke"],
                        fontWeight: "500",
                        marginBottom: SPACING,
                      }}
                    >
                      {coffee.included}
                    </Text>
                    <View style={{ flexDirection: "row", marginTop: SPACING }}>
                      <Ionicons
                        name="star"
                        size={SPACING * 1.5}
                        color={Colors.primary}
                      />
                      <Text
                        style={{
                          color: Colors.white,
                          marginLeft: SPACING,
                        }}
                      >
                        {coffee.rating}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "35%",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          padding: SPACING / 2,
                          width: SPACING * 5,
                          height: SPACING * 5,
                          backgroundColor: Colors.dark,
                          borderRadius: SPACING,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Ionicons
                          name="cafe"
                          size={SPACING * 2}
                          color={Colors.primary}
                        />
                        <Text
                          style={{
                            color: Colors["white-smoke"],
                            fontSize: SPACING,
                          }}
                        >
                          Coffee
                        </Text>
                      </View>
                      <View
                        style={{
                          padding: SPACING / 2,
                          width: SPACING * 5,
                          height: SPACING * 5,
                          backgroundColor: Colors.dark,
                          borderRadius: SPACING,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Ionicons
                          name="water"
                          size={SPACING * 2}
                          color={Colors.primary}
                        />
                        <Text
                          style={{
                            color: Colors["white-smoke"],
                            fontSize: SPACING,
                          }}
                        >
                          Milk
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        backgroundColor: Colors.dark,
                        padding: SPACING / 2,
                        borderRadius: SPACING / 2,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: Colors["white-smoke"],
                          fontSize: SPACING * 1.3,
                        }}
                      >
                        Medium roasted
                      </Text>
                    </View>
                  </View>
                </BlurView>
              </View>
            </ImageBackground>
  
            <View
              style={{
                padding: SPACING,
              }}
            >
              <Text
                style={{
                  color: Colors["white-smoke"],
                  fontSize: SPACING * 1.7,
                  marginBottom: SPACING,
                }}
              >
                Description
              </Text>
              <Text numberOfLines={3} style={{ color: Colors.white }}>
                {coffee.description}
              </Text>
              <View
                style={{
                  marginVertical: SPACING * 2,
                }}
              >
                <Text
                  style={{
                    color: Colors["white-smoke"],
                    fontSize: SPACING * 1.7,
                    marginBottom: SPACING,
                  }}
                >
                  Size
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {sizes.map((size, index) => (
                    <TouchableOpacity
                      onPress={() => setActiveSize(size)}
                      key={index}
                      style={[
                        {
                          borderWidth: 2,
                          paddingVertical: SPACING / 2,
                          borderRadius: SPACING,
                          backgroundColor: Colors["dark-light"],
                          width: width / 3 - SPACING * 2,
                          alignItems: "center",
                        },
                        activeSize == size && {
                          borderColor: Colors.primary,
                          backgroundColor: Colors.dark,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          {
                            color: Colors["white-smoke"],
                            fontSize: SPACING * 1.9,
                          },
                          activeSize === size && {
                            color: Colors.primary,
                          },
                        ]}
                      >
                        {size}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
        <SafeAreaView
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <View
            style={{
              padding: SPACING,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: SPACING * 3,
            }}
          >
            <Text style={{ color: Colors.white, fontSize: SPACING * 1.5 }}>
              Price
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: Colors.primary, fontSize: SPACING * 2 }}>
                $
              </Text>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: SPACING * 2,
                  marginLeft: SPACING / 2,
                }}
              >
                {coffee.price}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              marginRight: SPACING,
              backgroundColor: Colors.primary,
              width: width / 2 + SPACING * 3,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: SPACING * 2,
            }}
          >
            <Text
              style={{
                color: Colors.white,
                fontSize: SPACING * 2,
                fontWeight: "700",
              }}
            >
              Buy Now
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </>
    );
  };
  
  export default CoffeeDetailsScreen;
  
  const styles = StyleSheet.create({});