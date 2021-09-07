import React from 'react';
import { Button, Text, View } from 'react-native';
const Signin =({navigation})=>{
    return(
        <View>
            <Text>Signin page </Text>
            <Button title="go tp hell" onPress={()=>navigation.navigate('Bottom')}></Button>
        </View>
    )
}
export default Signin;