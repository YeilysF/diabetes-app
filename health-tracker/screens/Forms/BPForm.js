import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, StatusBar, Alert, Button, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient'
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useTheme } from 'react-native-paper';

import DatePicker from 'react-native-datepicker';
import { Picker } from "@react-native-picker/picker";
import { Dropdown } from 'react-native-element-dropdown';

import axios from 'axios';
import baseURL from "../../assets/common/baseURL";

const BPForm = (props) => {
  const { colors } = useTheme();

  const [heartRate, setHeartRate] = useState(0)
  const [diastolic, setDiastolic] = useState(0)
  const [systolic, setSystolic] = useState(0)
  const [timeOfDay, setTimeOfDay] = useState("")
  const [date, setDate] = useState(new Date())
  const [description, setDescription] = useState("")
  const [error, setError] = useState(false);
  const [id, setId] = useState("");
 // const [bloodPressures, setbloodPressure] = useState([]);

  const deleteBP = () => {
    axios.delete(`${baseURL}BloodPressures/${id}`)
   .then((res) => {
       console.log("Blood Pressure Deleted");  
       props.navigation.navigate("Blood Pressure")
   }), []
 };

  const addBP = () => {
    if (heartRate === "" || diastolic === "" || systolic === "" || timeOfDay === "") {
      setError("These fields cannot be left blank");
    }

    let bloodPressure = {
        diastolic: diastolic,
        systolic: systolic,
        heartRate: heartRate,
        timeOfDay: timeOfDay,
        dateTime: date,
        description: description,
    };
    
    if(id !== "") {
        axios
        .put(`${baseURL}BloodPressures/${id}`, bloodPressure)
        .then((res) => {
            if(res.status == 200 || res.status == 201) {
                setTimeout(() => {
                    props.navigation.navigate("Blood Pressure");
                }, 500)
            }
        })
        .catch((error) => {
            console.log("Error"+error)
        })
        } else{
            axios
            .post(`${baseURL}BloodPressures/add`, bloodPressure)
            .then((res) => {
                if (res.status == 200) {
                console.log("Success")
                    props.navigation.navigate("Blood Pressure");
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
            setHeartRate(props.route.params.heartRate.toString());
            setDiastolic(props.route.params.diastolic.toString());
            setSystolic(props.route.params.systolic.toString());
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
            <Text style={[styles.text_footer, {color: colors.text}]}>Diastolic</Text>
            <View style={styles.action}>
                <Fontisto
                    name="heartbeat-alt"
                    color={colors.text}
                    size={23}
                />
                <TextInput
                    onChangeText={(text)=> setDiastolic(text)}
                    keyboardType='numeric'
                    value={diastolic}
                    placeholder="mmHg" 
                    style={[styles.textInput, {color: colors.text}]}
                    autoCapitalize="none"
                />
            </View>

            <Text style={[styles.text_footer, {color: colors.text, marginTop: 20}]}>Systolic</Text>
            <View style={styles.action}>
                <Fontisto
                    name="heartbeat-alt"
                    color={colors.text}
                    size={23}
                />
                <TextInput
                    onChangeText={(text)=> setSystolic(text)}
                    keyboardType='numeric'
                    placeholder="mmHg" 
                    value={systolic}
                    style={[styles.textInput, {color: colors.text}]}
                    autoCapitalize="none"
                />
            </View>

            <Text style={[styles.text_footer, {color: colors.text, marginTop: 20}]}>Heart Rate</Text>
            <View style={styles.action}>
                <Fontisto
                    name="heartbeat"
                    color={colors.text}
                    size={23}
                />
                <TextInput
                    onChangeText={(text)=> setHeartRate(text)}
                    keyboardType='numeric'
                    placeholder="bmp" 
                    value={heartRate}
                    style={[styles.textInput, {color: colors.text}]}
                    autoCapitalize="none"
                />
            </View>


            <Text style={[styles.text_footer, {
                color: colors.text,
                marginTop: 20
            }]}>Time of Day</Text>
            
            <View style={styles.action}>
            <MaterialCommunityIcons
                name="clock-time-ten-outline"
                color={colors.text}
                size={25}
            />
            <TextInput
                onChangeText={(text)=> setTimeOfDay(text)}
                placeholder="(Breakfast, Lunch, Dinner, ...)" 
                value={timeOfDay}
                style={[styles.textInput, {color: colors.text}]}
                autoCapitalize="none"
            />

            </View>

            <Text style={[styles.text_footer, {
                color: colors.text,
                marginTop: 20
            }]}>Date</Text>

            <View style={styles.action}>

            <TouchableOpacity style={{marginTop: 50}} 
                onPress={() => setOpen(true)}
            >
            </TouchableOpacity>
                
                <DatePicker
                style={{width: 300}}
                date={date}
                mode="date"
                placeholder="Select date"
                format="MM-DD-YYYY"
                minDate="01-01-2020"
                maxDate="12-01-2026"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                },
                dateInput: {
                    marginLeft: 36,
                    left: 0,
                    alignItems: "flex-start",
                    borderWidth: 0
                }
                }}
                onDateChange={(date) => setDate(date)}
            />
            </View>


            <Text style={[styles.text_footer, {
                color: colors.text,
                marginTop: 5
            }]}>Notes (Optional) </Text>
            <View style={styles.action}>
                <SimpleLineIcons
                    name="note"
                    color={colors.text}
                    size={22}
                />
                <TextInput
                    placeholder="Description"
                    onChangeText={(text)=> setDescription(text)}
                    value={description}
                    multiline={true}
                    style={[styles.textInput, {color: colors.text}]}
                    autoCapitalize="none"
                />
            </View>
            {error ? <Text style={{color: '#FF0000', marginTop:15}}>{error}</Text> : null}

            <TouchableOpacity style={{marginTop: 25}} 
                onPress={(() => addBP())}
            >
                <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.logIn}>
                            <Text style={[styles.textSign, {color:'#fff'}]}>Save</Text>
                </LinearGradient>
            </TouchableOpacity>

            {id  ? (
            <TouchableOpacity style={{marginTop: 20}} 
                onPress={(() => deleteBP())}
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

export default BPForm;

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