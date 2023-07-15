import React,{ useReducer,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default (reducer,actions,initialState) => {

  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state,dispatch] = useReducer(reducer,initialState);

	const storeData = async (value) => {
		try {
		  const jsonValue = JSON.stringify(value);
		  await AsyncStorage.setItem('@storage_key',jsonValue);
		} catch (error) {
		  console.log(error);
		} 
	  }
	
	  const getData = async () => {
		  try {
			const jsonValue = await AsyncStorage.getItem('@storage_key');
			return jsonValue != null ? JSON.parse(jsonValue) : null; 	
		  } catch (error) {
			console.log(error);	
		  }
	  }

 
	useEffect(() => {
      const showData = async () => {	
		 const storedState = await getData();
		 if(storedState){
			dispatch({ type:"showdata",payload: storedState})	
		 }  
	  }
	  showData();
	}, []);

	useEffect(() => {
      storeData(state); 
	}, [state])


	//actions === { addBlogPost: (dispatch) => {return () => {} }} 
	const boundActions = {};
    for(let key in actions){
	 //key === 'addBlogPost'
	 boundActions[key] = actions[key](dispatch);	
	}
	 
	return <Context.Provider value={{ state,...boundActions }}>{children}</Context.Provider>
  }

  return { Context, Provider };
}