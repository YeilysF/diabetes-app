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

const HomeScreen = (props) => {
    const { colors } = useTheme();

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const [items, setItems] = React.useState([
      { name: 'MEDICATIONS', link: require('../../assets/images/2.png'), color1: '#87cefa', color2: '#6495ed', width: 140, height: 70, screen: "Medications"},
      { name: 'GLUCOSE', link: require('../../assets/images/1.png'), color1: '#f08080', color2: '#cd5c5c', width: 120, height: 70, screen: "Glucose"},
      { name: 'INSULIN', link: require('../../assets/images/3.png'), color1: '#20b2aa', color2: '#48d1cc', width: 140, height: 70, screen: "Insulin"},
      { name: 'BLOOD PRESSURE', link: require('../../assets/images/6.png'), color1: '#4682b4', color2: '#1e90ff', width: 140, height: 70, screen: "Blood Pressure"},
      { name: 'NUTRITION', link: require('../../assets/images/7.png'), color1: '#daa520', color2: '#ffd700', width: 150, height: 70, screen: "Nutrition"}, 
      { name: 'EXERCISE', link: require('../../assets/images/8.png'), color1: '#b0c4de', color2: '#4682b4', width: 150, height: 70, screen: "Exercise"},
    ])

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
        <View style={styles.header}>
          <View style={styles.subHeader}>
              <Text style={styles.title}>Hi User 
              <Emoji name="wave" style={{fontSize: 30}} />
              </Text>
          </View>
          <View style={styles.searchContainer}>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={styles.search}
          />
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
                      <LinearGradient colors={[item.color1, item.color2]} style={[styles.itemContainer]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                      <Text style={{marginBottom: 10}}>
                        <Image source={(item.link)} style={{width: item.width, height: item.height }}/>
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

export default HomeScreen;

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
      flex: 2.5,
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
    height: height * 0.19,
    width: height * 0.21,
    //borderColor: '#3498db',
    //borderWidth: 2,
  },
  itemName: {
    fontSize: 17,
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