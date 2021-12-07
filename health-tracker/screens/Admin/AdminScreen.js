import React, {useState, useCallback, useEffect,useContext} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, 
  Text, 
  View, 
  Button, 
  Dimensions, 
  FlatList, 
  ActivityIndicator, 
  StatusBar, 
  Image, 
  TouchableOpacity} from 'react-native';

import {Avatar, Searchbar} from 'react-native-paper';
import { Header, Item, Input } from "native-base"

import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'
import Moment from 'moment';
import Icon from "react-native-vector-icons/FontAwesome"

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import baseURL from "../../assets/common/baseURL"
import { AuthContext }  from '../../context/store/Auth';

const AdminScreen = (props) => {

  const [userList, setUserList] = useState([]);
  const [userFilter, setUserFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  useFocusEffect(
    useCallback(
        () => {
            // Get Token
            AsyncStorage.getItem("jwt")
                .then((res) => {
                    setToken(res)
                })
                .catch((error) => console.log(error))

            axios
                .get(`${baseURL}Users`)
                .then((res) => {
                    setUserList(res.data);
                    setUserFilter(res.data);
                    setLoading(false);
                })
                return () => {
                  setUserList();
                  setUserFilter();
                  setLoading(true);
              }
            },
            [],
          )
      )

  const searchUser = (text) => {
    if (text == "") {
        setUserFilter(userList)
    }
    setUserFilter(
        userList.filter((i) => 
          i.fullname.toLowerCase().includes(text.toLowerCase())
        )
    )
   
}

  const editUser = (user) => {
    axios.get(`${baseURL}Users/${user}`)
  .then((res) => {
      props.navigation.navigate('List Users', {
        id: res.data._id,
        fullname: res.data.fullname,
        email: res.data.email,
        password: res.data.password,
        diabetesType: res.data.diabetesType,
        weight: res.data.weight,
        image: res.data.image,
        country: res.data.country,
      })
  }), [user]
  };

  return (

    <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
        <View style={styles.header}> 
      

        </View>
          <Animatable.View style={[styles.footer, {backgroundColor: "white", alignItems: "center"}]} animation="fadeInUpBig">

              <View style={styles.searchContainer}>
                <Searchbar
                  placeholder="Search users"
                  onChangeText={(text) => searchUser(text)}
                  value={userFilter}
                  style={styles.search}
              />
            </View>
    
            <View style={styles.userContainer}>
              <FlatList 
                data={userFilter}
                renderItem={({ item }) => (
                  <TouchableOpacity 
                  onPress={() => editUser(item._id)}
                  >
                    <View style={styles.item}>
                        { item.image == "" ? (
                        <Avatar.Image source={require('../../assets/app_images/default-avatar.png')} size={30}/>
                        ) : (
                        <Avatar.Image source={item.image} size={30}/>
                        )
                        }
                        <View style={{flex:1, justifyContent: "space-between", flexDirection: "row"}}>

                      <Text style={styles.itemSub}>{item.fullname}</Text>
                      <Text style={styles.itemSubDate}> {Moment(item.dateCreated).format('l')}</Text>
                      </View>
                  </View>
                </TouchableOpacity>
                )}
                keyExtractor={(item) => item._id}
              />
            </View>
          </Animatable.View>
        </LinearGradient>
      </View>

  );
  
}
export default AdminScreen;

var { height, width } = Dimensions.get("screen")

const styles = StyleSheet.create({
  spinner: {
    height: height / 2,
    alignItems: 'center',
    justifyContent: 'center'
},
  container: {
    flex: 1, 
    width: width,
    height: height
  },
  header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  footer: {
      flex: 7,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
     // paddingVertical: 270,
     paddingHorizontal: 5
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: "center",
    color: "white",
  },
  titleContainer: {
    borderRadius: 15,
    marginTop: 30,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
   // paddingHorizontal: 100,
    backgroundColor:  '#4169e1',
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
  item: {
   // backgroundColor: '#4169e1',
    borderWidth: 1,
    borderColor: '#4169e1',
    padding: 11,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  userContainer: {
    flex: 1,
    marginTop: 8,
    flexDirection: "row",

  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 20,
    //padding: 5,
    height: height * 0.055,
    width: height * 0.40,
  },
  itemSub: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
   // textAlign: "left",
   },
   itemSubDate: {
    fontSize: 17,
   },

  headerItem: {
      //margin: 3,
      width: 190,
  },
  itemName: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: "center"
  },
  search: {
    justifyContent: 'center',
    width: height*0.42,
    borderRadius: 10
  },
  searchContainer: {
    alignItems: 'center',
    marginTop: 30
  }
  
});


/*

 {loading ? (
          <View style={styles.spinner}> 
              <ActivityIndicator size="large" color="red" />
          </View>
      ) : (


          )}


*/