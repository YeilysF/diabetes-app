import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, StatusBar, Image, ImageBackground, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'
import { FlatGrid } from 'react-native-super-grid';
import Emoji from 'react-native-emoji';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Searchbar } from 'react-native-paper';

//vector icons
import Icon from "react-native-vector-icons/FontAwesome";

const SettingsScreen = (props) => {
    const { colors } = useTheme();
    const searched = true; 
    const [searchQuery, setSearchQuery] = React.useState('');

    const [items, setItems] = React.useState([
      { name: 'ABOUT', link: require('../../assets/home_images/2.png'), color1: '#87cefa', color2: '#6495ed', width: 140, height: 70, screen: "About"},
      
    ])

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
        <View style={styles.header}>
          <View style={styles.subHeader}>
              <Text style={styles.title}>Settings 
              <Emoji name="gear" style={{fontSize: 30}} />
              </Text>
          </View>
        </View>

          <Animatable.View style={[styles.footer, {backgroundColor: "white"}]} animation="fadeInUpBig">
              <FlatGrid
                itemDimension={130}
                data={items}
                spacing={10}
                style={styles.gridView}
                renderItem={({ item }) => (
                    <TouchableOpacity
                    onPress={()=>props.navigation.navigate(item.screen)}
                    >
                      <LinearGradient colors={[item.color1, item.color2]} style={[styles.itemContainer]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} >
                      <Text style={{marginBottom: -11}}>
                      </Text>
                      <Text style={styles.itemName}>{item.name}</Text>
                      </LinearGradient>
                    </TouchableOpacity>
              
                )}
              />
          </Animatable.View>
        </LinearGradient>
      </View>
    );
};

export default SettingsScreen;

const {height} = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  header: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'column',
  },
  subHeader: {
    marginTop: 40,
    marginLeft: 20,
    alignItems: 'flex-start',
  },
  footer: {
      flex: 4,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
     // paddingVertical: 270,
      paddingHorizontal: 5
  },
  title: {
    color: 'aliceblue',
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 5,
    marginTop: 50
  },
  subText: {
    color: 'aliceblue',
    fontSize: 20,
    marginTop: 10
  },
  gridView: {
    flex: 1,
    marginTop: 20
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    //padding: 5,
    height: height * 0.06,
    width: height * 0.40,
  },
  itemName: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  menu: {
    marginRight: 20,
  },
  search: {
    justifyContent: 'center',
    width: height*0.42,
    borderRadius: 10
  },
  searchContainer: {
    alignItems: 'center',
    marginTop: 20
  }
});