import React from 'react';
import {Text, View,  Vibration,Button
} from 'react-native';

const App = () => {


  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Try editing me! 🎉</Text>
      <View>
        <Button title="Vibrate once" onPress={() => Vibration.vibrate(1000,true)} />
      </View>
    </View>
    
  );
};

export default App;