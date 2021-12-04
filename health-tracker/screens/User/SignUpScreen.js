import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, StatusBar, Alert, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
import axios from "axios";

const SignUpScreen = (props) => {

    //Hooks for user input 
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const { colors } = useTheme();

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
          <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
          <View style={styles.header}>
              <Text style={styles.text_header}>Create an Account</Text>
          </View>
          <Animatable.View 
            animation="fadeInUpBig" 
            style={[styles.footer, {backgroundColor: colors.background}]}
          >
              <Text style={[styles.text_footer, {color: colors.text}]}>Name</Text>
              <View style={styles.action}>
                  <FontAwesome name="user-o" color={colors.text} size={20} />
                  <TextInput 
                      onChangeText={(text)=> setFullname(text)}
                      placeholder="Full Name" 
                     // secureTextEntry={data.secureTextEntry ? true : false}
                      style={[styles.textInput, {color: colors.text}]}
                      autoCapitalize="none"
                  />
                  
              </View>

              <Text style={[styles.text_footer, {
                  color: colors.text,
                  marginTop: 35
              }]}>Email</Text>
              <View style={styles.action}>
                <FontAwesome name="envelope-open-o" color={colors.text} size={20} /> 
                  <TextInput 
                      onChangeText={(text) => setEmail(text.toLowerCase())}
                      placeholder="Email"
                     // secureTextEntry={data.secureTextEntry ? true : false}
                      style={[styles.textInput, {color: colors.text}]}
                      autoCapitalize="none"
                  />
              </View>

              <Text style={[styles.text_footer, {
                  color: colors.text,
                  marginTop: 35
              }]}>Password</Text>
              <View style={styles.action}>
                  <Feather 
                      name="lock"
                      color={colors.text}
                      size={20}
                  />
                  <TextInput 
                      onChangeText={(text)=> setPassword(text)}
                      placeholder="Password"
                      secureTextEntry={true}
                      style={[styles.textInput, {color: colors.text}]}
                      autoCapitalize="none"
                  />
              </View>


              <View style={styles.button}>
                  
                  <TouchableOpacity 
                    //onPress={() => props.navigation.navigate('Questionnaire')}
                    onPress={() => props.navigation.navigate('Questionnaire',{
                        fullname : fullname,
                        email : email,
                        password : password
                    })}
                    style={[styles.logIn, {borderColor: '#4169e1',borderWidth: 1,marginTop: 15}]}
                  >
                    <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.logIn}>
                        <Text style={[styles.textSign, {color:'#fff'}]}>Next</Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity 
                    onPress={() => props.navigation.goBack()}
                    style={[styles.logIn, {borderColor: '#4169e1',borderWidth: 1,marginTop: 15}]}
                  >
                      <Text style={[styles.textSign, {color: '#4169e1'}]}>Back</Text>
                  </TouchableOpacity>
                  
              </View>
          </Animatable.View>
        </LinearGradient>
      </View>
    );
};

export default SignUpScreen;

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
    height: "100%"
},
text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D"
},
image: {
    flex: 1,
    height: undefined,
    width: undefined
},
titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16
},
subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500"
},
profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden"
},
dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
},
active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10
},
add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
},
infoContainer: {
    alignSelf: "center",
    alignItems: "center",
},
statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
},
statsBox: {
    alignItems: "center",
    flex: 1
},
mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10
},
mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1
},
recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10
},
recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16
},
status: {
  flex: 1,
  alignItems: "center",
},
activityIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20
},
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  footer: {
      flex: 4,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: '5%',
  },

  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18,
      marginTop: height * 0.025
  },
  action: {
      flexDirection: 'row',
      marginTop: 4,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: height * 0.01
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: height * 0.01,
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

  });