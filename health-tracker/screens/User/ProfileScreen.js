import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, StatusBar, Image, ImageBackground, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'

const HomeScreen = (props) => {
    const { colors } = useTheme();

//        const[name, setName] = useState();
//         const[lastName, setlastName] = useState();
//         const[email, setemail] = useState();
//         const[diabetesType, setdiabetesType] = useState();
//         const[weight, setweight] = useState();

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
        <View style={styles.header}>
          {/* <View style={styles.subHeader}>
              <Text style={styles.title}>Hi User 
              <Emoji name="wave" style={{fontSize: 30}} />
              </Text>
          </View> */}
          <View style={{ alignSelf: "center" }}>
              <View style={styles.profileImage}>
                  <Image source={require("../../assets/defaultProfilePic.jpg")} style={styles.image} resizeMode="center"></Image>
              </View>
          </View>

          <View style={styles.nameContainer}>
              <Text style={[styles.title, { fontWeight: "200", fontSize: 36 }]}>First and Last Name</Text>
              <Text style={[styles.title, styles.subText]}>useremail@mail.com</Text>
          </View>
        </View>

          <Animatable.View style={[styles.footer, {backgroundColor: "white"}]} animation="fadeInUpBig">
            <View style={[styles.detailContainer]}>
                <View style={styles.detailBox}>
                <Text style={styles.text}>Diabetes Type:</Text> 
                </View>
            </View>
            <View style={[styles.detailContainer]}>
                <View style={styles.detailBox}>
                <Text style={styles.text}>Weight:</Text> 
                </View>
            </View>
          </Animatable.View>

          <View style={styles.button}>   
                  <TouchableOpacity 
                    //onPress={() => props.navigation.navigate('EditProfile')}
                    style={[styles.editprofile]}
                  >
                    <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.editprofile}>
                        <Text style={[styles.textSign, {color:'#fff'}]}>Edit Profile</Text>
                    </LinearGradient>
                  </TouchableOpacity>                  
              </View>
        </LinearGradient>
      </View>
    );
};

export default HomeScreen;

let screenHeight = Math.round(Dimensions.get("window").height);
let screenWidth = Math.round(Dimensions.get("window").width);

const {height} = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  header: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'column',
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: screenHeight * 0.101,
    alignSelf: "center",
    marginTop: "15%",
    marginHorizontal: 25,
    backgroundColor: "whitesmoke",
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 5,
      },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 12,
    opacity: 0.8
  },
  detailBox: {
    flex: 1,
    alignItems: "center",
    marginLeft: 40,
  },
  text: {
    fontFamily: "open-sans",
    color: "black",
    fontSize: 0.043 * screenWidth,
  },
  subHeader: {
    marginTop: 40,
    marginLeft: 20,
    alignItems: 'flex-start',
  },
  footer: {
      flex: 2.5,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
     // paddingVertical: 270,
      paddingHorizontal: 5
  },
  title: {
    color: 'aliceblue',
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 5,
    marginTop: -20
  },
  button: {
    alignItems: 'center',
    marginTop: -120
  },
  editprofile: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: -50
  },
  image: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
