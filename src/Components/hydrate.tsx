import {
    Button,
    Platform,
    Text,
    Vibration,
    Image,
    View,
    SafeAreaView,
  ScrollView,
  ImageBackground,
    StatusBar,
    StyleSheet,
    useColorScheme,
  } from 'react-native';
  import Svg, {
    Use,
  } from 'react-native-svg';
export default function Hydrate() {
    return (
        <View>
            <Text>hola</Text>
            <Image 
source={require('../assets/3.png')}
style={{ width: 500, height: 400 }}            
            />

</View>
    );
  }