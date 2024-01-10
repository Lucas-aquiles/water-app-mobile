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
  import Svg, { Path } from 'react-native-svg';

export default function WavyHeader() {
    return (
      <View >
        <View style={{ height: 160, width:"100%" }}>
          <Svg
            height="100%"
            width="100%"
            viewBox="0 0 1440 320"
            style={{ position: 'absolute', top:-50 }}
          >
            <Path
              fill="#012a6a"
              fill-opacity="1" 
              d="M0,256L120,266.7C240,277,480,299,720,266.7C960,235,1200,149,1320,106.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            />
          </Svg>
        </View>
      </View>
    );
  }