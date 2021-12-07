import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, StatusBar, Alert, Button, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient'
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useTheme } from 'react-native-paper';

//icons
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DatePicker from 'react-native-datepicker';
import { Picker } from "@react-native-picker/picker";
import { Dropdown } from 'react-native-element-dropdown';

//import {AuthContext}  from '../../context/store/Auth';

import axios from 'axios';
import baseURL from "../../assets/common/baseURL";

const ExerciseForm = (props) => {

  const { colors } = useTheme();
  const [exerciseType, setExerciseType] = useState("")
  const [timeOfDay, setTimeOfDay] = useState("")
  const [description, setDescription] = useState("")
  const [error, setError] = useState(false);
  const [id, setId] = useState("");

  const deleteExercise = () => {
    axios.delete(`${baseURL}Exercises/${id}`)
   .then((res) => {
       console.log("Exercise Deleted");  
       props.navigation.navigate("Exercise")
   }), []
 };

  const addExercise = () => {
    if (exerciseType === "" || timeOfDay === "") {
      setError("These fields cannot be left blank");
    }

    let exercise = {
        exerciseType: exerciseType,
        timeOfDay: timeOfDay,
        description: description,
    };

    if(id !== "") {
        axios
        .put(`${baseURL}Exercises/${id}`, exercise)
        .then((res) => {
            if(res.status == 200 || res.status == 201) {
                setTimeout(() => {
                    props.navigation.navigate("Exercise");
                }, 500)
            }
        })
        .catch((error) => {
            console.log("Error"+error)
        })
        } else{
            axios
            .post(`${baseURL}Exercises/add`, exercise)
            .then((res) => {
                if (res.status == 200) {
                console.log("Success")
                    props.navigation.navigate("Exercise");
                }
            })
            .catch((error) => {
                console.log("Error"+ error)
            });
        }
  };

  useEffect(() => {
    if(!props.route.params) {
        setId("");
    } else {
        setId(props.route.params.id);
        setExerciseType(props.route.params.exerciseType);
        setTimeOfDay(props.route.params.timeOfDay);
        setDescription(props.route.params.description);
    }
}, [])
   
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
        <View style={styles.header}>
        </View>
        <Animatable.View 
          animation="fadeInUpBig" 
          style={[styles.footer, {backgroundColor: colors.background}]}
        >
            <Text style={[styles.text_footer, {color: colors.text}]}>Exercise Type</Text>
            <View style={styles.action}>
                <MaterialCommunityIcons
                    name="run-fast"
                    color={colors.text}
                    size={25}
                />
                <TextInput
                    onChangeText={(text)=> setExerciseType(text)}
                    value={exerciseType}
                    placeholder="(Walking, Running, Jogging...)" 
                    style={[styles.textInput, {color: colors.text}]}
                    autoCapitalize="none"
                />
            </View>

            <Text style={[styles.text_footer, {color: colors.text, marginTop: 25}]}>Time Of Day</Text>
            <View style={styles.action}>
                <MaterialCommunityIcons
                    name="clock-time-ten-outline"
                    color={colors.text}
                    size={25}
                />
                <TextInput
                    onChangeText={(text)=> setTimeOfDay(text)}
                    value={timeOfDay}
                    placeholder="(Morning, Afternoon, Night...)" 
                    style={[styles.textInput, {color: colors.text}]}
                    autoCapitalize="none"
                />
            </View>


            <Text style={[styles.text_footer, {
                color: colors.text,
                marginTop: 25
            }]}>Notes (Optional) </Text>
            <View style={styles.action}>
                <SimpleLineIcons
                    name="note"
                    color={colors.text}
                    size={22}
                />
                <TextInput
                    placeholder="Description"
                    value={description}
                    onChangeText={(text)=> setDescription(text)}
                    multiline={true}
                    style={[styles.textInput, {color: colors.text}]}
                    autoCapitalize="none"
                />
            </View>
            {error ? <Text style={{color: '#FF0000', marginTop:15}}>{error}</Text> : null}

            <TouchableOpacity style={{marginTop: 50}} 
                onPress={(() => addExercise())}
            >
                <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.logIn}>
                            <Text style={[styles.textSign, {color:'#fff'}]}>Save</Text>
                </LinearGradient>
            </TouchableOpacity>

            {id  ? (
            <TouchableOpacity style={{marginTop: 20}} 
                onPress={(() => deleteExercise())}
            >
                <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.logIn}>
                            <Text style={[styles.textSign, {color:'#fff'}]}>Delete</Text>
                </LinearGradient>
            </TouchableOpacity>
            ) : null}

             <TouchableOpacity 
                    onPress={() => props.navigation.goBack()}
                    style={[styles.logIn, {borderColor: '#4169e1',borderWidth: 1,marginTop: 15}]}
                  >
                      <Text style={[styles.textSign, {color: '#4169e1'}]}>Cancel</Text>
                  </TouchableOpacity>
        </Animatable.View>
      </LinearGradient>
    </View>
  );
};

export default ExerciseForm;

const {height, width} = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387',
      height: height,
      width: width,
     // flexWrap: 'wrap'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    footer: {
        flex: 6,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: width,
       paddingHorizontal: 30,
        paddingVertical: 30,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        //color: 'blue',
        fontSize: 20,
    },
    action: {
        flexDirection: 'row',
        marginTop: 2,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        width: 350,
        borderBottomColor: "black",
        borderBottomWidth: 0.17
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 8,
        color: '#05375a',
        fontSize: 20,
       // borderBottomColor: "black",
       // borderBottomWidth: 0.2
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
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
        fontWeight: 'bold'
    },
    picker: {
      paddingHorizontal: 120,
      borderWidth: 1,
      height: 38,
      borderColor: "#666",
    },
    dropdown: {
      height: 38,
      borderColor: 'gray',
      borderWidth: 0.5,
      paddingHorizontal: 121,
      marginLeft: 9
    },
  });

