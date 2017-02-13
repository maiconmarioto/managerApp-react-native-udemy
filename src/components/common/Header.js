import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
   const { textStyle, viewStyle } = styles;

   return (
      <View style={viewStyle}>
         <Text style={textStyle}>{props.headerText}</Text>
      </View>
   );
};

const styles = {
   viewStyle: {
      backgroundColor: '#F1F1F1',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      paddingTop: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      elevation: 2,
      position: 'relative'
   },
   textStyle: {
      fontSize: 20
   }
};

export { Header };
