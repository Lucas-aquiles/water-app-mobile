/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
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
import WavyHeader from './src/Components/custom';
import Hydrate from './src/Components/hydrate';


import Svg, { Path } from 'react-native-svg';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
const image= 'https://example.com/my-image.png'
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
  barStyle={"light-content"}
  backgroundColor={"#1166c1"}
      />
      <View
        style={styles.sectionContainer}>
        
       
          {/* <Image source={{ uri: "https://reactjs.org/logo-og.png" }}  style={{width: 300, height: 300}}  /> */}
          
          <WavyHeader  />
          <View style={styles.section}>

            <Text  style={[
          {
            color: "white",
          },
        ]}>
              Hidratate
            </Text>
            <Text style={[
          {
            color: "white",
          },
        ]}>
              No olvides tomar agua todo el día... 
              Cuida tu salud...
            </Text>
          <Hydrate/>
          </View>
          
         
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  sectionContainer: {
  backgroundColor:"#1166c1",
  height: "100%"
  
  },
  section:{
    backgroundColor:"#012a6a",
    width:"100%",
    height:"100%",
    top:-89

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
