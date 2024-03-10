import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import AccelerometerDataScreen from "./AccelerometerDataScreen";
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const navigation = useNavigation();

  const goToReadCSVScreen = () => {
    navigation.navigate('ReadCSV');
  };

 const goToCollectedData = () => {
  navigation.navigate('CollectData');
 };

 const goToAccelerometerDatabase = () => {
  navigation.navigate('AccelerometerDatabase');
 };

  return (
    <View>
      <Text style={styles.text}>Fit-Track app</Text>
      <Button title="Read CSV" onPress={goToReadCSVScreen} />
      <Button title="Start collecting Data" onPress={goToCollectedData} />
      <Button title="Go to Database" onPress={goToAccelerometerDatabase}/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    textAlign:'center'
  },
});

export default HomeScreen;
