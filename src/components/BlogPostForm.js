import React,{useState} from "react";
import { View,Text,StyleSheet, TextInput, Button } from 'react-native';

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
		  <Button 
			title={`${titleButton} Blog Post`}
			onPress={() => onSubmit(title,content)}
		   />   
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
	  fontSize:20,
	  marginBottom:5,
	  marginLeft:5
	}	
})
 
export default BlogPostForm;