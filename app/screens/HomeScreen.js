import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View ,Image, Dimensions} from 'react-native'
import {BlurView} from "expo-blur";
import React, {useState} from 'react';
import SPACING from '../config/SPACING';
import {Ionicons} from "@expo/vector-icons";
import Colors from '../config/Colors';
import avatar from "../../assets/avatar.jpg";
import SearchField from '../components/SearchField';
import Categories from '../components/Categories';
import coffees from "../config/coffees";
const {width} = Dimensions.get("window");
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation=useNavigation();
    const [activeCategoryId, setActiveCategoryId] = useState(null);

  return (
    <SafeAreaView>
    <ScrollView
      style={{
        padding: SPACING,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            borderRadius: SPACING,
            overflow: "hidden",
            width: SPACING * 4,
            height: SPACING * 4,
          }}
        >
          <BlurView
            style={{
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="menu"
              size={SPACING * 2.5}
              color={Colors.secondary}
            />
          </BlurView>
        </TouchableOpacity>
        <View
          style={{
            width: SPACING * 4,
            height: SPACING * 4,
            overflow: "hidden",
            borderRadius: SPACING,
          }}
        >
          <BlurView
            style={{
              height: "100%",
              padding: SPACING / 2,
            }}
          >
            <Image
              style={{
                height: "100%",
                width: "100%",
                borderRadius: SPACING,
              }}
              source={avatar}
            />
          </BlurView>
        </View>
      </View>
      <View style={{ width: "80%", marginVertical: SPACING * 3 }}>
        <Text
          style={{
            color: Colors.white,
            fontSize: SPACING * 3.5,
            fontWeight: "600",
          }}
        >
          Find the best coffee for you
        </Text>
      </View>
      <SearchField />
      <Categories onChange={(id) => setActiveCategoryId(id)} />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {coffees
          .filter((coffee) => {
            if (activeCategoryId === null) {
              return true;
            }
            return coffee.categoryId === activeCategoryId;
          })
          .map((coffee) => (
            <View
              key={coffee.id}
              style={{
                width: width / 2 - SPACING * 2,
                marginBottom: SPACING,
                borderRadius: SPACING * 2,
                overflow: "hidden",
              }}
            >
              <BlurView
                tint="dark"
                intensity={95}
                style={{
                  padding: SPACING,
                }}
              >
                <TouchableOpacity
                onPress={()=>navigation.navigate("Details", {coffee})}
                  style={{
                    height: 150,
                    width: "100%",
                  }}
                >
                  <Image
                    source={coffee.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: SPACING * 2,
                    }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      right: 0,
                      borderBottomStartRadius: SPACING * 3,
                      borderTopEndRadius: SPACING * 2,
                      overflow: "hidden",
                    }}
                  >
                    <BlurView
                      tint="dark"
                      intensity={70}
                      style={{
                        flexDirection: "row",
                        padding: SPACING - 2,
                      }}
                    >
                      <Ionicons
                        style={{
                          marginLeft: SPACING / 2,
                        }}
                        name="star"
                        color={Colors.primary}
                        size={SPACING * 1.7}
                      />
                      <Text
                        style={{
                          color: Colors.white,
                          marginLeft: SPACING / 2,
                        }}
                      >
                        {coffee.rating}
                      </Text>
                    </BlurView>
                  </View>
                </TouchableOpacity>
                <Text
                  numberOfLines={2}
                  style={{
                    color: Colors.white,
                    fontWeight: "600",
                    fontSize: SPACING * 1.7,
                    marginTop: SPACING,
                    marginBottom: SPACING / 2,
                  }}
                >
                  {coffee.name}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{ color: Colors.secondary, fontSize: SPACING * 1.2 }}
                >
                  {coffee.included}
                </Text>
                <View
                  style={{
                    marginVertical: SPACING / 2,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        color: Colors.primary,
                        marginRight: SPACING / 2,
                        fontSize: SPACING * 1.6,
                      }}
                    >
                      $
                    </Text>
                    <Text
                      style={{ color: Colors.white, fontSize: SPACING * 1.6 }}
                    >
                      {coffee.price}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: Colors.primary,
                      padding: SPACING / 2,
                      borderRadius: SPACING,
                      width: SPACING*3,
                    }}
                  >
                    <Ionicons
                      name="add"
                      size={SPACING * 2}
                      color={Colors.white}
                    />
                  </TouchableOpacity>
                </View>
              </BlurView>
            </View>
          ))}
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})