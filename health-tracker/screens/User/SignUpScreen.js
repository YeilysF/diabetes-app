import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, StatusBar, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';

const LoginScreen = (props) => {

    const [data, setData] = React.useState({
        fullname: '',
        password: '',
        verifyPassword: '',
        isValidEmail: true,
        isValidPassword: true,      
    });

    const { colors } = useTheme();

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
          <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
          <View style={styles.header}>
              <Text style={styles.text_header}>Create an account!!</Text>
          </View>
          <Animatable.View 
            animation="fadeInUpBig" 
            style={[styles.footer, {backgroundColor: colors.background}]}
          >
              <Text style={[styles.text_footer, {color: colors.text}]}>Name</Text>
              <View style={styles.action}>
                  <FontAwesome name="user-o" color={colors.text} size={20} />
                  <TextInput 
                      placeholder="Name" 
                      secureTextEntry={data.secureTextEntry ? true : false}
                      style={[styles.textInput, {color: colors.text}]}
                      autoCapitalize="none"
                  />
                  {data.check_textInputChange ? 
                  <Animatable.View
                      animation="bounceIn"
                  >
                      <Feather 
                          name="check-circle"
                          color="blue"
                          size={20}
                      />
                  </Animatable.View>
                  : null}
              </View>

              <Text style={[styles.text_footer, {
                  color: colors.text,
                  marginTop: 35
              }]}>Last Name</Text>
              <View style={styles.action}>
                <FontAwesome name="user-o" color={colors.text} size={20} />
                  <TextInput 
                      placeholder="Last Name"
                      secureTextEntry={data.secureTextEntry ? true : false}
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
                      placeholder="Email"
                      secureTextEntry={data.secureTextEntry ? true : false}
                      style={[styles.textInput, {color: colors.text}]}
                      autoCapitalize="none"
                  />
              </View>

              { data.isValidEmail ? null : 
              <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Invalid email.</Text>
              </Animatable.View>
              }

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
                      placeholder="Password"
                      secureTextEntry={data.secureTextEntry ? false : true}
                      style={[styles.textInput, {color: colors.text}]}
                      autoCapitalize="none"
                  />
              </View>

              { data.isValidPassword ? null : 
              <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
              </Animatable.View>
              }

              <Text style={[styles.text_footer, {
                  color: colors.text,
                  marginTop: 35
              }]}>Verify Password</Text>
              <View style={styles.action}>
                  <Feather 
                      name="lock"
                      color={colors.text}
                      size={20}
                  />
                  <TextInput 
                      placeholder="Verify Password"
                      secureTextEntry={data.secureTextEntry ? false : true}
                      style={[styles.textInput, {color: colors.text}]}
                      autoCapitalize="none"
                  />
              </View>

              <View style={styles.button}>
                  
                  <TouchableOpacity 
                    onPress={() => props.navigation.navigate('Sign Up')}
                    style={[styles.logIn, {borderColor: '#4169e1',borderWidth: 1,marginTop: 15}]}
                  >
                    <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.logIn}>
                        <Text style={[styles.textSign, {color:'#fff'}]}>Sign In</Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity 
                    onPress={() => props.navigation.navigate('Login')}
                    style={[styles.logIn, {borderColor: '#4169e1',borderWidth: 1,marginTop: 15}]}
                  >
                      <Text style={[styles.textSign, {color: '#4169e1'}]}>Back to Main</Text>
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
        paddingBottom: 10
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 20
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