import React,{ useContext } from "react";
import {Text,View,StyleSheet} from 'react-native';
import { Context } from "../context/BlogContext";

const ShowScreen = ({route}) => {
 const { state } = useContext(Context);	
 const { id } = route.params;
 const blogPost = state.find((blogPost) => blogPost.id === id)
  
 return ( 
	<View style={styles.container}>
      <Text>{blogPost.title}</Text>
	  <Text>{blogPost.content}</Text>
	</View> 
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
	justifyContent:'center',
	alignItems:'center'
  }
});
 
export default ShowScreen;