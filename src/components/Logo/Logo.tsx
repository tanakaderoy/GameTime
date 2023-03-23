import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import GameTimeLogo from '../../../assets/images/logo.svg';

interface LogoProps {
  style?: StyleProp<ViewStyle>;
}

const originalWidth = 140;
const originalHeight = 22;
const aspectRatio = originalWidth / originalHeight;

function Logo({style}: LogoProps): React.ReactElement {
  return (
    <View>
      <View style={style}>
        <View style={styles.svgContainer}>
          <GameTimeLogo
            width={'100%'}
            height={'100%'}
            viewBox={`0 0 ${originalWidth} ${originalHeight}`}
          />
        </View>
      </View>
    </View>
  );
}

export default Logo;

const styles = StyleSheet.create({
  svgContainer: {width: '100%', aspectRatio},
});
