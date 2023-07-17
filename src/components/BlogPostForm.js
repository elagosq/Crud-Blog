import React,{useState} from "react";
import { View,Text,StyleSheet, TextInput, Pressable } from 'react-native';

const BlogPostForm = ({ action,onSubmit,initialValues }) => {
	const [title,setTitle] = useState(initialValues.title);
	const [content,setContent] = useState(initialValues.content);
    const titleButton = action === "create" ? action : action; 

	return (
		<View style={styles.container}>
		  <Text style={styles.label}>Enter Title:</Text>
		  <TextInput 
			 style={styles.input} 
			 value={title} 
			 onChangeText={(text) => setTitle(text)}
		  />
		  <Text style={styles.label}>Enter content:</Text>
		  <TextInput 
			 style={styles.input} 
			 value={content} 
			 onChangeText={(text) => setContent(text)} />
		   <View style={styles.containerButton}>
			<Pressable
		     style={({pressed}) => [
			   {
				 backgroundColor : pressed ? 'green' : 'blue'   	
			   },
			   styles.button
			 ]}
			 onPress={() => onSubmit(title,content)}
		    >
			<Text style={styles.titleButton}>{`${titleButton} Blog Post`}</Text>
		   </Pressable>
		 </View>	 
	   </View>
	);
}


BlogPostForm.defaultProps = {
  initialValues: {
	title: '',
	content: ''
  } 
};

const styles = StyleSheet.create({
	container:{
      padding:20
	},
    input:{
	  fontSize:18,
	  borderWidth:1,
	  padding:5,
	  margin:5,
	  borderColor:'black'
	},
	label:{
	  fontSize:16,
	  marginBottom:5,
	  marginLeft:5
	},

	containerButton:{
      alignItems:'center'
	},
	button:{
	  marginVertical:20,
      borderRadius:8,
	  padding:6,
	  height:50,
	  width:'70%',
	  justifyContent:'center',
	  alignItems:'center',
	  elevation:5
	},
	titleButton:{
	  fontSize:18,
	  color:'white'	
	}	
})
 
export default BlogPostForm;