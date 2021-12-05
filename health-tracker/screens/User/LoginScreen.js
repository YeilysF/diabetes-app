import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, StatusBar, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';

//store
import  { AuthContext }  from '../../context/store/Auth';
import { loginUser } from "../../context/actions/AuthActions";
//import Toast from "react-native-root-toast";

const LoginScreen = (props) => {
    const { colors } = useTheme();
    const context = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    useEffect(() => {
      if (context.stateUser.isAuthenticated === true) {
        setSuccess(true);
        props.navigation.navigate("Home");
      } 
    }, [context.stateUser.isAuthenticated]);

    const handleSubmit = () => {
      const user = {
        email,
        password,
      };
  
      if (email === "" || password === "") {
        setError(true);
      } else {
        loginUser(user, context.dispatch);
      }

      console.log(email,password);
    };
     

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
          <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
          <View style={styles.header}>
              <Text style={styles.text_header}>Welcome!</Text>
          </View>
          <Animatable.View 
            animation="fadeInUpBig" 
            style={[styles.footer, {backgroundColor: colors.background}]}
          >
              <Text style={[styles.text_footer, {color: colors.text}]}>Username</Text>
              <View style={styles.action}>
                  <FontAwesome name="envelope-open-o" color={colors.text} size={20} />
                  <TextInput 
                      onChangeText={(text) => setEmail(text)}
                      value = {email}
                      placeholder="Username" 
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
                      onChangeText={(text) => setPassword(text)}
                      value = {password}
                      placeholder="Password"
                      secureTextEntry={true}
                      style={[styles.textInput, {color: colors.text}]}
                      autoCapitalize="none"
                  />
              </View>

              <TouchableOpacity
              onPress={() => props.navigation.navigate('Forgot Password')}>
                  <Text style={{color: '#4169e1', marginTop:15}}>Forgot password?</Text>
              </TouchableOpacity>
              {error ? <Text style={{color: '#FF0000', marginTop:15}}>Invalid username and/or password</Text> : null} 
              {success ? <Text style={{color: 'green', marginTop:15}}>Success</Text> : null} 
          
              <View style={styles.button}>
                  <TouchableOpacity 
                    onPress={() => handleSubmit()}
                    style={styles.logIn}>
                    <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.logIn}>
                        <Text style={[styles.textSign, {color:'#fff'}]}>Sign In</Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity 
                    onPress={() => props.navigation.navigate('Sign Up')}
                    style={[styles.logIn, {borderColor: '#4169e1',borderWidth: 1,marginTop: 15}]}
                  >
                      <Text style={[styles.textSign, {color: '#4169e1'}]}>Sign Up</Text>
                  </TouchableOpacity>
              </View>
          </Animatable.View>
        </LinearGradient>
      </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
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
        fontSize: 18
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
    }
  });