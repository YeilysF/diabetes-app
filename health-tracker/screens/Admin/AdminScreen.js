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

import {Avatar} from 'react-native-paper';
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

const ListHeader = () => {
  return(
      <View
          elevation={1}
          style={styles.listHeader}
      >
          <View style={styles.headerItem}>
              <Text style={{ fontWeight: '600', marginLeft: 70}}>Name</Text>
          </View>
          <View style={styles.headerItem}>
              <Text style={{ fontWeight: '600',  marginLeft: 80}}>Date Created</Text>
          </View>
      </View>
  )
}

const AdminScreen = (props) => {

  const [userList, setUserList] = useState([]);
  const [userFilter, setUserFilter] = useState();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState();

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
            i.name.toLowerCase().includes(text.toLowerCase())
        )
    )
}

  const deleteUser = (id) => {
    axios
        .delete(`${baseURL}Users/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
            const users = userFilter.filter((item) => item.id !== id)
            setUserFilter(users)
        })
        .catch((error) => console.log(error));
}

  return (

    <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
        <View style={styles.header}>
        </View>
          <Animatable.View style={[styles.footer, {backgroundColor: "white"}]} animation="fadeInUpBig">
          <View style={styles.titleContainer}>
              <Text style={styles.title}>Manage Users</Text>
              </View>
            <View style={styles.userContainer}>
              <FlatList 
                data={userList}
                ListHeaderComponent={ListHeader}
                renderItem={({ item }) => (
                  <TouchableOpacity style={{}}>
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
  profileImage: {
        width: 110,
        height: 110,
        borderRadius: 60,
        marginTop: '23%'
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
  gridView: {
    flex: 1,
    marginTop: 20
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
  //  flexDirection: "row",
    //flexWrap: "wrap",
  },
  itemContainer: {
   // flexDirection: "column",
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
   listHeader: {
    flexDirection: 'row',
    padding: 5,
    borderTopWidth: 1,
    borderTopColor: "blue",
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "blue",
},
  headerItem: {
      //margin: 3,
      width: 200,
  },
  
});


/*

 {loading ? (
          <View style={styles.spinner}> 
              <ActivityIndicator size="large" color="red" />
          </View>
      ) : (


          )}


*/