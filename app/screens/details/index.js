import React, { useState } from 'react';
import { Text,TouchableOpacity,View } from 'react-native';
const Details=()=>{
    const [button,setButton]=useState('');
    const [buton,setButon]=useState('')
    return(
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>{setButton}} >
                <Text style={{fontSize:30,margin:50,backgroundColor:'skyblue',padding:20}}>Button</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setButon}}>
                <Text style={{fontSize:30,margin:50,backgroundColor:'skyblue',padding:20}}>Button</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Details;
