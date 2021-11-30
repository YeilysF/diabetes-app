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
              {/* diabetis Type
              Weight
              edit profile */}
          </Animatable.View>
          <View style={styles.button}>   
                  <TouchableOpacity 
                    //onPress={() => props.navigation.navigate('Sign Up')}
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
    height: undefined,
    width: undefined
  },
  profileImage: {
        top: 0,
        width: 120,
        height: 120,
        borderRadius: 20,
        overflow: "hidden"
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  subText: {
    color: 'aliceblue',
    fontSize: 20,
    marginTop: -5
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
  
});




// // import React from 'react';
// // import { StyleSheet, Text, View, Button } from 'react-native';

// // const ProfileScreen = (props) => {
// //   return (
// //     <View style={styles.container}>
// //       <Text>Profile Screen</Text>
// //     </View>
// //   );
  
// // }
// // export default ProfileScreen;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });

// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet,SafeAreaView, Image, ScrollView, StatusBar, TouchableOpacity, Dimensions } from 'react-native';

// import { Ionicons, MaterialIcons, FontAwesome, } from "@expo/vector-icons";
// import { useTheme } from '@react-navigation/native';
// import { LinearGradient } from 'expo-linear-gradient';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import * as Animatable from 'react-native-animatable';
// import { FlatGrid } from 'react-native-super-grid';
// import Emoji from 'react-native-emoji';
// const Drawer = createDrawerNavigator();

// const ProfileScreen = ({navigation}) => {

//         const[name, setName] = useState();
//         const[lastName, setlastName] = useState();
//         const[email, setemail] = useState();
//         const[diabetesType, setdiabetesType] = useState();
//         const[weight, setweight] = useState();
        

//         const username = "First and Last Name"
//         const theme = useTheme();

//         return (
//           <View style={styles.container}>
//             <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
              
//       <ScrollView showsVerticalScrollIndicator={false}>

          // <View style={{ alignSelf: "center" }}>
          //     <View style={styles.profileImage}>
          //         <Image source={require("../../assets/defaultProfilePic.jpg")} style={styles.image} resizeMode="center"></Image>
          //     </View>
          // </View>

          // <View style={styles.nameContainer}>
          //     <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>{username}</Text>
          //     <Text style={[styles.text, styles.email_subText]}>useremail@mail.com</Text>
          // </View>

//           <View style={styles.statsContainer}>
//               <View style={styles.statsBox}>
//                   <Text style={[styles.text, { fontSize: 24 }]}>3</Text>
//                   <Text style={[styles.text, styles.subText]}>Diabetes Type</Text>
//               </View>

//               <View style={styles.statsBox}>
//                   <Text style={[styles.text, { fontSize: 24 }]}>200</Text>
//                   <Text style={[styles.text, styles.subText]}>Weight lb</Text>
//               </View>

//               {/* <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]} >
//                   <MaterialIcons username="edit" size={28} onPress={() => navigation.navigate("editProfile")}></MaterialIcons>
//                   <Text style={[styles.text, styles.subText]} >Edit Profile</Text>
//               </View> */}
//           </View>

//           <View style={styles.button}>
//                   <TouchableOpacity 
//                     onPress={() => props.navigation.navigate('')}
//                     style={[styles.logIn, {borderColor: '#4169e1',borderWidth: 1,marginTop: 15}]}
//                   >
//                       <Text style={[styles.textSign, {color: '#4169e1'}]}>Edit Profile</Text>
//                   </TouchableOpacity>
                  
//           </View>
//       </ScrollView>
      
    
//               {/* <Animatable.View style={[styles.footer, {backgroundColor: "white"}]} animation="fadeInUpBig">
//                   <FlatGrid
//                     itemDimension={130}
//                     data={items}
//                     spacing={10}
//                     style={styles.gridView}
//                     renderItem={({ item }) => (
                      
//                         <TouchableOpacity>
//                           <LinearGradient colors={[item.color1, item.color2]} style={[styles.itemContainer]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
//                           <Text style={{marginBottom: 10}}>
//                             <Image source={(item.link)} style={{width: item.width, height: item.height }}/>
//                           </Text>
//                           <Text style={styles.itemName}>{item.name}</Text>
//                           </LinearGradient>
//                         </TouchableOpacity>
                  
//                     )}
//                   />
//               </Animatable.View> */}
//             </LinearGradient>
//           </View>
//         );

//     // return (
//       // <SafeAreaView style={styles.container}>
//       // <ScrollView showsVerticalScrollIndicator={false}>

//       //     <View style={{ alignSelf: "center" }}>
//       //         <View style={styles.profileImage}>
//       //             <Image source={require("../../assets/defaultProfilePic.jpg")} style={styles.image} resizeMode="center"></Image>
//       //         </View>
//       //     </View>

//       //     <View style={styles.nameContainer}>
//       //         <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>{username}</Text>
//       //         <Text style={[styles.text, styles.email_subText]}>useremail@mail.com</Text>
//       //     </View>

//       //     <View style={styles.statsContainer}>
//       //         <View style={styles.statsBox}>
//       //             <Text style={[styles.text, { fontSize: 24 }]}>3</Text>
//       //             <Text style={[styles.text, styles.subText]}>Diabetes Type</Text>
//       //         </View>

//       //         <View style={styles.statsBox}>
//       //             <Text style={[styles.text, { fontSize: 24 }]}>200</Text>
//       //             <Text style={[styles.text, styles.subText]}>Weight lb</Text>
//       //         </View>

//       //         {/* <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]} >
//       //             <MaterialIcons username="edit" size={28} onPress={() => navigation.navigate("editProfile")}></MaterialIcons>
//       //             <Text style={[styles.text, styles.subText]} >Edit Profile</Text>
//       //         </View> */}
//       //     </View>

//       //     <View style={styles.button}>
//       //             <TouchableOpacity 
//       //               onPress={() => props.navigation.navigate('')}
//       //               style={[styles.logIn, {borderColor: '#4169e1',borderWidth: 1,marginTop: 15}]}
//       //             >
//       //                 <Text style={[styles.textSign, {color: '#4169e1'}]}>Edit Profile</Text>
//       //             </TouchableOpacity>
                  
//       //     </View>
//       // </ScrollView>
//       // </SafeAreaView>
//     // );
// };

// export default ProfileScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
// },
// text: {
//     fontFamily: "HelveticaNeue",
//     color: "#52575D"
// },
// image: {
//     flex: 1,
//     height: undefined,
//     width: undefined
// },
// subText: {
//     top: 5,
//     fontSize: 12,
//     color: "#AEB5BC",
//     textTransform: "uppercase",
//     fontWeight: "500"
// },
// email_subText: {
//   top: 10,
//   fontSize: 15,
//   color: "#AEB5BC",
//   textTransform: "uppercase",
//   fontWeight: "500"
// },
// profileImage: {
//     top: 10,
//     width: 150,
//     height: 150,
//     borderRadius: 20,
//     overflow: "hidden"
// },
// nameContainer: {
//     alignSelf: "center",
//     alignItems: "center",
//     marginTop: 20
// },
// button: {
//   alignItems: 'center',
//   marginTop: 50
// },
// logIn: {
//   width: '50%',
//   top:300,
//   height: 50,
//   justifyContent: 'center',
//   alignItems: 'center',
//   borderRadius: 10
// },
// textSign: {
//   fontSize: 18,
//   fontWeight: 'bold'
// }, 
// header: {
//   flex: 1,
//   justifyContent: 'center',
//   flexDirection: 'column',
// },
// subHeader: {
// marginTop: 40,
// marginLeft: 20,
// alignItems: 'flex-start',
// },
// statsContainer: {
//     flexDirection: "row",
//     alignSelf: "center",
//     marginTop: 32
// },
// statsBox: {
//     alignItems: "center",
//     flex: 1
// },
// mediaImageContainer: {
//     width: 180,
//     height: 200,
//     borderRadius: 12,
//     overflow: "hidden",
//     marginHorizontal: 10
// },
// mediaCount: {
//     backgroundColor: "#41444B",
//     position: "absolute",
//     top: "50%",
//     marginTop: -50,
//     marginLeft: 30,
//     width: 100,
//     height: 100,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 12,
//     shadowColor: "rgba(0, 0, 0, 0.38)",
//     shadowOffset: { width: 0, height: 10 },
//     shadowRadius: 20,
//     shadowOpacity: 1
// },
// recent: {
//     marginLeft: 78,
//     marginTop: 32,
//     marginBottom: 6,
//     fontSize: 10
// },
// recentItem: {
//     flexDirection: "row",
//     alignItems: "flex-start",
//     marginBottom: 16
// },
// status: {
//   flex: 1,
//   alignItems: "center",
// },
// activityIndicator: {
//     backgroundColor: "#CABFAB",
//     padding: 4,
//     height: 12,
//     width: 12,
//     borderRadius: 6,
//     marginTop: 3,
//     marginRight: 20
// }
// })