import React, {useState, useCallback, useEffect,useContext} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, Dimensions, FlatList, ActivityIndicator} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import baseURL from "../../assets/common/baseURL"
import { AuthContext }  from '../../context/store/Auth';

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
                   // setLoading(false);
                })
        },
            [],
          )
      )

    console.log("Users" + userList)

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
       
          <FlatList 
            data={userList}
            renderItem={({ item}) => (
                <Text>{item.fullname}</Text>
            )}
            keyExtractor={(item) => item._id}
          />
  
    </View>
  );
  
}
export default AdminScreen;

var { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinner: {
    height: height / 2,
    alignItems: 'center',
    justifyContent: 'center'
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