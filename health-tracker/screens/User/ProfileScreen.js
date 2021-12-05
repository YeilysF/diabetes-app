import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, StatusBar, Image, ImageBackground, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'
import { FlatGrid } from 'react-native-super-grid';
import Emoji from 'react-native-emoji';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Searchbar } from 'react-native-paper';

//vector icons
import Icon from "react-native-vector-icons/FontAwesome";

const HomeScreen = (props) => {
    const { colors } = useTheme();

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const [items, setItems] = React.useState([
      { name: 'MEDICATIONS', color1: '#87cefa', color2: '#6495ed', width: 140, height: 70},
      { name: 'GLUCOSE', link: require('../../assets/images/1.png'), color1: '#f08080', color2: '#cd5c5c', width: 120, height: 70},
      { name: 'INSULIN', link: require('../../assets/images/3.png'), color1: '#20b2aa', color2: '#48d1cc', width: 140, height: 70},
    ])

  // const[name, setName] = useState();
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
              <Image source={require("../../assets/defaultProfilePic.jpg")} style={styles.profileImage} resizeMode="center"></Image>
              <Text style={[styles.title, { fontWeight: "bold", fontSize: 24, marginTop: 5 }]}>First and Last Name</Text>
              <Text style={[styles.subText]}>useremail@mail.com</Text>
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
      alignItems: 'center',
      flexDirection: 'column',
  },
  subHeader: {
    marginTop: 40,
    marginLeft: 20,
    alignItems: 'flex-start',
  },
  footer: {
      flex: 2.1,
      marginTop: 35,
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
  profileImage: {
        width: 110,
        height: 110,
        borderRadius: 60,
        marginTop: '23%'
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    color: 'aliceblue',
    fontSize: 17,
    marginTop: 5,
  },
  gridView: {
    flex: 1,
    marginTop: 20
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    //padding: 5,
    height: height * 0.185,
    //borderColor: '#3498db',
    //borderWidth: 2,
  },
  nameContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 20
  },
  itemName: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },
  menu: {
    marginRight: 20,
  },
  search: {
    justifyContent: 'center',
    width: height*0.42,
    borderRadius: 10
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
  
});