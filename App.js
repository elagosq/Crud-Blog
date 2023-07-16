import * as React from 'react';
import { StyleSheet, TouchableOpacity,Platform } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as BlogProvider } from './src/context/BlogContext';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible:false
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={IndexScreen} 
          options={({ navigation }) => ({
            headerRight: () =>  (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
              <Feather name="plus" size={30} style={styles.icon}/>
            </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen 
          name="Show" 
          component={ShowScreen} 
          options={({ navigation,route }) => ({
            title : route.params.name,
            headerRight: () =>  (
            <TouchableOpacity onPress={() => navigation.navigate('Edit',{id : route.params.id})}>
              <EvilIcons name="pencil" size={30} style={styles.icon} />
            </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />    
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
   icon:{
    color: Platform.OS === 'ios' ? 'green' : 'black'
   }  
});

export default () => {
  return (
   <BlogProvider>
     <App />
   </BlogProvider>
  )
}