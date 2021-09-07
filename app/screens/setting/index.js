// import React from 'react';
// import { Text,View } from 'react-native';
// const Setting =()=>{
//     return(
//         <View>
//             <Text>Setting Screen </Text>
//         </View>
//     )
// }
// export default Setting;

// // React Native Rotate Image View Using Animation
// // https://aboutreact.com/react-native-rotate-image-view-using-animation/

// // import React in our code
// import React from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Animated,
//   Easing,
//   TouchableHighlight,
//   Text,
// } from 'react-native';

// const Setting = () => {
//   let rotateValueHolder = new Animated.Value(0);

//   const startImageRotateFunction = () => {
//     rotateValueHolder.setValue(0);
//     Animated.timing(rotateValueHolder, {
//       toValue: 1,
//       duration: 3000,
//       easing: Easing.linear,
//       useNativeDriver: false,
//     }).start(() => startImageRotateFunction());
//   };

//   const rotateData = rotateValueHolder.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <Text style={styles.titleText}>
//           React Native Rotate Image View Using Animation
//         </Text>
//         <Animated.Image
//           style={{
//             width: 200,
//             height: 200,
//             transform: [{rotate: rotateData}],
//           }}
//           source={{
//             uri:
//               'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
//           }}
//         />
//         <TouchableHighlight
//           onPress={startImageRotateFunction}
//           style={styles.buttonStyle}>
//           <Text style={styles.buttonTextStyle}>
//             Start Image Rotate Function
//           </Text>
//         </TouchableHighlight>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#C2C2C2',
//   },
//   titleText: {
//     fontSize: 22,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     padding: 20,
//   },
//   textStyle: {
//     textAlign: 'center',
//     marginTop: 10,
//   },
//   buttonStyle: {
//     fontSize: 16,
//     color: 'white',
//     backgroundColor: 'green',
//     padding: 5,
//     marginTop: 32,
//     minWidth: 250,
//   },
//   buttonTextStyle: {
//     padding: 5,
//     color: 'white',
//     textAlign: 'center',
//   },
// });

// export default Setting;

// //  import React in our code
// import React, {useState, useEffect} from 'react';

// // import all the components we are going to use
// import {View, Text, Image, StyleSheet} from 'react-native';

// const Setting = () => {
//   const [align, setAlign] = useState('center');
//   const [alignsecond, setAlignsecond] = useState(false);

//   useEffect(() => {
//     let myTimeout = setTimeout(() => {
//       setAlign('flex-start'), setAlignsecond(true);
//     }, 3000);
//     return () => clearTimeout(myTimeout);
//   }, []);

//   return (
//     <View
//       style={[
//         styles.container,
//         {justifyContent: align}
//       ]}>
//       <Image
//         source={{
//           uri:
//             'https://raw.githubusercontent.com/AboutReact/sampleresource/master/react_logo.png',
//         }}
//         style={{width: 100, height: 100}}
//       />
//       {!alignsecond ? null : (
//         <View style={{margin: 10}}>
//           <Text
//             style={{
//               color: '#114998',
//               fontSize: 30,
//               fontWeight: 'bold',
//             }}>
//             About React
//           </Text>
//         </View>
//       )}
//     </View>
//   );
// };

// export default Setting;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     flexDirection: 'row',
//     marginHorizontal: 40,
//   },
// });

import React from 'react';
import { ImageBackground, View } from 'react-native';
import BouncingBalls from 'react-native-bouncing-ball'
const Setting=()=>{
  return(
    <View style={{height:'100%',width:'100%'}}>
      <ImageBackground style={{height:'100%',width:'100%'}} source={require('../../assets/300.jpg')}>
      <BouncingBalls
          amount={10}
          animationDuration={5000}
          minSpeed={30}
          maxSpeed={500}
          minSize={10}
          maxSize={30}
          imageBall={require('../../assets/200.png')}
         />
         </ImageBackground>
    </View>
    
  )
}
export default Setting;