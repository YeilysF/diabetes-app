import React, {useContext, useState, useEffect, useCallback} from 'react';
import { StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  Image, 
  StatusBar, 
  Dimensions, 
  ActivityIndicator, 
  FlatList, 
  TextInput} from 'react-native';
  import { useTheme } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import AntDesign from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Auth, { AuthContext }  from '../../context/store/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import baseURL from "../../assets/common/baseURL";
import { useFocusEffect } from '@react-navigation/native';


const EditProfile = (props) => {

  const [userProfile, setUserProfile] = useState([])

  const context = useContext(AuthContext); 

     useFocusEffect(
       useCallback(() => {
       if (
           context.stateUser.isAuthenticated === false || 
           context.stateUser.isAuthenticated === null
       ) {
          // props.navigation.navigate("Login")
       }

       AsyncStorage.getItem("jwt")
           .then((res) => {
               axios
                   .get(`${baseURL}Users/${context.stateUser.user.userId}`, {
                       headers: { Authorization: `Bearer ${res}` },
                   })
                   .then((user) => setUserProfile(user.data))
           })
           .catch((error) => console.log(error))

       }, [context.stateUser.isAuthenticated]))

  const { colors } = useTheme();

  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [image, setImage] = useState();
  const [diabetesType, setDiabetesType] = useState();
  const [weight, setWeight] = useState();
  const [country, setCountry]  = useState();
  const [userId, setUserId]  = useState("");
  
    const editUser = () => {

      let user = {
          fullname: fullname,
          email: email,
          password: password,
          diabetesType: diabetesType,
          weight: weight,
          image: image,
          isAdmin: false,
          country: country,
      };
      
              axios
              .post(`${baseURL}Users/`, user)
              .then((res) => {
                  if (res.status == 200) {
                  console.log("Success")
                      props.navigation.navigate("Profile");
                  }
              })
              .catch((error) => {
                  console.log("Error"+ error)
              });
          
    };
  
      useEffect(() => {
          if(!props.route.params) {
              setUserId("");
          } else {
              setUserId(props.route.params.id);
              setFullname(props.route.params.fullname);
              setEmail(props.route.params.email);
              setPassword(props.route.params.password);
              setImage(props.route.params.image);
              setDiabetesType(props.route.params.diabetesType);
              setWeight(props.route.params.weight.toString());
              setCountry(props.route.params.country);
          }
      }, [])

return (
  <View style={styles.mainContainer}>
    
     <StatusBar backgroundColor='#009387' barStyle="light-content"/>
      <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
      <View style={styles.header}></View>

      <Animatable.View style={[styles.footer, {backgroundColor: "white"}]} animation="fadeInUpBig">

      <Text style={[styles.text_footer, {color: colors.text}]}>Fullname</Text>
          <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
              <TextInput
                  onChangeText={(text)=> setFullname(text)}
                  value={fullname}
                  placeholder={userProfile.fullname}
                  style={[styles.textInput, {color: colors.text}]}
                  autoCapitalize="none"
              />
          </View>

          <Text style={[styles.text_footer, {color: colors.text}]}>Email</Text>
          <View style={styles.action}>
          <FontAwesome name="envelope-open-o" color={colors.text} size={20} /> 
              <TextInput
                  onChangeText={(text)=> setEmail(text)}
                  value={email}
                  placeholder={userProfile.email} 
                  style={[styles.textInput, {color: colors.text}]}
                  autoCapitalize="none"
              />
          </View>

          <Text style={[styles.text_footer, {color: colors.text}]}>Password</Text>
          <View style={styles.action}>
          <Feather 
                    name="lock"
                    color={colors.text}
                    size={20}
                />
              <TextInput
                  onChangeText={(text)=> setPassword(text)}
                  value={password}
                  secureTextEntry={true}
                  placeholder="******" 
                  style={[styles.textInput, {color: colors.text}]}
                  autoCapitalize="none"
              />
          </View>

          <Text style={[styles.text_footer, {color: colors.text}]}>Diabetes Type</Text>
          <View style={styles.action}>
          <FontAwesome name="medkit" color={colors.text} size={20} />
              <TextInput
                  onChangeText={(text)=> setDiabetesType(text)}
                  value={diabetesType}
                  placeholder={userProfile.diabetesType}
                  style={[styles.textInput, {color: colors.text}]}
                  autoCapitalize="none"
              />
          </View>

          <Text style={[styles.text_footer, {color: colors.text}]}>Weight</Text>
          <View style={styles.action}>
          <FontAwesome name="dashboard" color={colors.text} size={20} />
              <TextInput
                  onChangeText={(text)=> setWeight(text)}
                  value={weight}
                  keyboardType='numeric'
                  placeholder={weight}
                  style={[styles.textInput, {color: colors.text}]}
                  autoCapitalize="none"
              />
          </View>

          <Text style={[styles.text_footer, {color: colors.text}]}>Country</Text>
          <View style={styles.action}>
          <FontAwesome name="globe" color={colors.text} size={20} /> 
              <TextInput
                  onChangeText={(text)=> setCountry(text)}
                  value={country}
                  placeholder="country" 
                  style={[styles.textInput, {color: colors.text}]}
                  autoCapitalize="none"
              />
          </View>

          <TouchableOpacity style={{marginTop: 20}} 
              onPress={(() => editUser())}
          >
              <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.logIn}>
                          <Text style={[styles.textSign, {color:'#fff'}]}>Update</Text>
              </LinearGradient>
          </TouchableOpacity>

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
}

export default EditProfile;

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
mainContainer: {
  flex: 1,
  height: height,
  width: width,
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
  flex: 6,
  backgroundColor: '#fff',
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  width: width,
 paddingHorizontal: 30,
  paddingVertical: 30,

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

   flexDirection: "row",
 },

text_footer: {
    //color: 'blue',
    fontSize: 20,
},
action: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
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