import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, StatusBar, Image, ImageBackground, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'
import { FlatGrid } from 'react-native-super-grid';
import Emoji from 'react-native-emoji';
import Ionicon from "react-native-vector-icons/Ionicons";

//vector icons
import Icon from "react-native-vector-icons/FontAwesome5";

const HomeScreen = (props) => {
    const { colors } = useTheme();

    const [items, setItems] = React.useState([
      { name: 'MEDICATIONS', icon: 'pill', color: '#dda0dd'},
      { name: 'GLUCOSE', icon: 'droplet', color: '#00bfff'},
      { name: 'INSULIN', icon: 'syringe', color: '#ffa07a'},
      { name: 'BLOOD PRESSURE', icon: 'heart', color: '#f08080'},
      { name: 'NUTRITION', icon: 'apple', color: '#40e0d0'},
      { name: 'EXERCISE', icon: 'volleyball', color: '#b0c4de'},
    ])

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
        <View style={styles.header}>
          <Text style={styles.title}>Hi User!
          <Emoji name="wave" style={{fontSize: 30}} />
          </Text>
          <Text style={styles.subText}>Welcome to the Home Screen</Text>
        </View>

          <Animatable.View style={[styles.footer, {backgroundColor: "white"}]} animation="fadeInUpBig">
              <FlatGrid
                itemDimension={130}
                data={items}
                spacing={10}
                style={styles.gridView}
                renderItem={({ item }) => (
                  <TouchableOpacity style={[styles.itemContainer, {backgroundColor: item.color}]}>
                    <Text style={{marginBottom: 5}}>
                      <Emoji name={item.icon} style={{fontSize: 50}} />
                    </Text>
                    <Text style={styles.itemName}>{item.name}</Text>
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
      marginLeft: 20,
      alignItems: 'flex-start'
  },
  footer: {
      flex: 3.5,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
     // paddingVertical: 270,
     // paddingHorizontal: 30
  },
  title: {
    color: 'aliceblue',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50
  },
  subText: {
    color: 'aliceblue',
    fontSize: 20,
    marginTop: 10
  },
  gridView: {
    flex: 1,
    marginTop: 15
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    height: 170,
    //borderColor: '#3498db',
    //borderWidth: 2,
  },
  itemName: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});