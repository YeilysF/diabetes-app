import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, StatusBar, Dimensions, ActivityIndicator, FlatList} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import AntDesign from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import axios from 'axios';
import baseURL from "../../assets/common/baseURL";

const ExerciseScreen = (props) => {

  const [error, setError] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(true);
  
    const deleteExercise = (exercise) => {
       axios.delete(`${baseURL}Exercises/${exercise}`)
      .then((res) => {
          console.log(res);  
          console.log(res.data);  
      }), [exercise]
    };

    
    useEffect(() => {
      const getExercise = async () => {
        try {
          const res = await axios.get(`${baseURL}Exercises`);
          setExercises(res.data);
          setLoading(false);
        } catch (e) {
          console.log(e);
        }
      }
      getExercise(); 

    }, [exercises])

  return (
    <View style={styles.mainContainer}>
      
       <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
        <View style={styles.header}></View>

        <Animatable.View style={[styles.footer, {backgroundColor: "white"}]} animation="fadeInUpBig">
     
        {loading ? (
          <View style={styles.spinner}> 
              <ActivityIndicator size="large" color="blue" />
          </View>
           ) : (
             <>
            {exercises ? 
            <>
            <View >
              <FlatList
              contentContainerStyle={styles.listContainer}
              data={exercises}
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
                     <MaterialCommunityIcons
                     name="run-fast"
                     color="white"
                     size={25}
                     style={{marginLeft: 10, marginTop: 5, marginRight: 10}}/>

                      <Text style={styles.item}>{item.exerciseType}</Text>
                      <Text style={styles.item}>{item.timeOfDay}</Text>
                   
                      <TouchableOpacity
                        style={{
                          borderWidth: 1,
                          borderColor: '#4169e1',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 25,
                          top: 10,
                          right: 5,
                          position: "absolute",
                          //bottom: 10,
                          //right: 50,
                          height: 25,
                          backgroundColor: '#fff',
                          borderRadius: 90,
                        }}
                        onPress={() => deleteExercise(item._id)}
                       
                >
                  <Icon name='minus' size={20} color='#4169e1' />
                </TouchableOpacity>
                    
                  </View>
                  <Text style={styles.item1}>{item.description}</Text>
                  </View>
                  
                  </>
                )
              }}
            />
            </View>

            <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: '#4169e1',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 60,
                  top: -32,
                  position: "absolute",
                  //bottom: 10,
                  //right: 50,
                  height: 60,
                  backgroundColor: '#fff',
                  borderRadius: 90,
                }}
                onPress={() => props.navigation.navigate('Exercise Form')}
              >
                <Icon name='plus' size={30} color='#4169e1' />
              </TouchableOpacity>
            </>
            : 
            <>
            <Image source={(require('../../assets/home_images/13.png'))} style={{width: '60%', height: '33%', marginTop: '40%'}}/>
            <Text style={styles.subText}>No records</Text>

            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.medText}> Add Exercise Activity</Text>
              <AntDesign name="right" color='#4169e1' size={20}></AntDesign>
            </TouchableOpacity>
            </>
            }
            </>
            )}
          </Animatable.View>

        </LinearGradient>
    </View>
  );
}

export default ExerciseScreen;

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
    backgroundColor: '#4169e1',
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