import React from 'react';
import Signin from '../screens/Auth/Signin';
import Signup from '../screens/Auth/Signup';
import Bottom from './bottom';
import { createStackNavigator } from '@react-navigation/stack';
const Stack=createStackNavigator();
const Mainstack=()=>{
    return (
        <Stack.Navigator>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Bottom" component={Bottom}/>
      </Stack.Navigator>
    )
}
export default Mainstack;