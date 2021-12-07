import React, {useState, useEffect, useCallback} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, StatusBar, FlatList, Dimensions, ActivityIndicator} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Icon from "react-native-vector-icons/AntDesign";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//import { StyleSheet, Text, View, Button } from 'react-native';
const aboutData = [{screenName:'Glucose',description:"See and post your glucose levels"},
{screenName:'Medications', description:'See and post your medications'},
{screenName:'Insulin', description:'See and post insulin your levels'},
{screenName:'Blood Pressure', description:'See and post your Blood Pressure levels'},
{screenName:'Exercise', description:'See and post your exercises'},
{screenName:'Admin', description:'Update, Delete users '},
{screenName:'Settings', description:'Change Password'},
{screenName:'Search Bar', description:'Search for screens in home page'},
{screenName:'Profile', description:'See and edit your details'},
{screenName:'Report ', description:'Under Construction'},
{screenName:'Nutrition', description:'Under construction'},
]

const About = (props) => {
  return (
    <View style={styles.container}>
      <View >
              <FlatList
              contentContainerStyle={styles.listContainer}
              data={aboutData}
              keyExtractor={(item, index) => {
                // console.log("index", index)
                return index.toString();
              }}
              renderItem={({ item }) => {
                //console.log("item", item)
                return (
                  <>
                  <View style={styles.itemContainer}>
                    <View style={styles.itemContainer1}>
                    <FontAwesome5 color="white" size={22} 
                      style={{marginLeft: 10, marginTop: 5, marginRight: 10}}/>
                      <Text style={styles.item}>{item.screenName}</Text>
                  </View>
                  <Text style={styles.item1}>{item.description}</Text>
                  </View>  
                  </>
                )
              }}
            />
            </View>
      <View style={styles.button}>
                  <TouchableOpacity 
                    onPress={() => props.navigation.navigate("Settings")}
                    style={styles.logIn}>
                    <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.logIn}>
                        <Text style={[styles.textSign, {color:'#fff'}]}>Back</Text>
                    </LinearGradient>
                  </TouchableOpacity>
              </View>
    </View>
    
  );
  
}
export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
},
footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
},
text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
},
text_footer: {
    color: '#05375a',
    fontSize: 20,
},
action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
},
textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    fontSize: 18
},
errorMsg: {
    color: '#FF0000',
    fontSize: 14,
},
button: {
    alignItems: 'center',
    marginTop: 50,
    width : '90%'
},
logIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},
textSign: {
    fontSize: 18,
    fontWeight: 'bold',
},
container: {
  flex: 1,
  justifyContent: 'center',
  
},
header: {
  flex: 1,
  justifyContent: 'center',
  flexDirection: 'column',
},
footer: {
flex: 5,
backgroundColor: '#fff',
borderTopLeftRadius: 30,
borderTopRightRadius: 30,
 //paddingVertical: 270,
//paddingHorizontal: 60,
alignItems: 'center',

},
subText:{
  fontSize: 25,
  color: 'gray',
  marginBottom: 20
},
medText:{
  fontWeight: 'bold',
  fontSize: 22,
  color: '#4169e1'
},
item: {
  //flexWrap: "wrap",
  flex: 1,
  marginTop: 5,
  height: 40,
  fontSize: 20,
  fontWeight: "bold",
  color: "white",
 // justifyContent: "flex-start", 
  //alignItems: "flex-start",
  textAlign: 'left', // <-- the magic
  textAlignVertical: "center"
 
},

item1: {
  //flexWrap: "wrap",
  //flex: 1,
 marginTop: -10,
  //height: 40,
  fontSize: 16,
 // fontWeight: "bold",
  color: "white",
  justifyContent: "flex-start", 
  //alignItems: "flex-start",
  textAlign: 'center', // <-- the magic
  //textAlignVertical: "center"
 
},
listContainer: {
  marginTop: 30,
//  height: 10,
 // flex: 1,
  //width: 100,
},

itemContainer: {
 borderRadius: 20,
 width: 400,
// height: 40,
  flexDirection: "column",
 marginTop: 15,
  backgroundColor: '#20b2aa',
},

itemContainer1: {
  //borderRadius: 20,
  //width: 400,
 // height: 40,
   flexDirection: "row",
   //marginTop: 30,
  // backgroundColor: '#4169e1',
 }
});