import React, { useContext } from 'react';
import { View,Text,StyleSheet,FlatList,TouchableOpacity,Platform } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import Feather from 'react-native-vector-icons/Feather';

const IndexScreen = ({ navigation }) => {
	const { state,deleteBlogPost }  = useContext(BlogContext);

	return (  
	 <View>
	   <FlatList 
	    data={state}
		keyExtractor={(blogPost) => blogPost.title}
		renderItem={({item}) => {
          return (
		   <TouchableOpacity onPress={() => navigation.navigate('Show',{id: item.id,name:item.title})}>
		    <View style={styles.row}>
			 <Text style={styles.title}>{item.title} - {item.id}</Text>
			 <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
			   <Feather name="trash" style={styles.icon}/>
			 </TouchableOpacity>
			</View>
		   </TouchableOpacity>	
		  )
		}}
	   />
	 </View>
    );
}

const styles = StyleSheet.create({
  row:{
    flexDirection:'row',
	justifyContent:'space-between',
	paddingVertical:20,
	paddingHorizontal:10,
	borderTopWidth:1,
	borderColor:'gray'
  },
  title:{
	fontSize:18
  },
  icon:{
	color: Platform.OS === 'ios' ? 'blue' : 'black',
	fontSize:24
  }	
});
 
export default IndexScreen;