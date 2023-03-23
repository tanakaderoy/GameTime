import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './EventItem.styles';

interface EventItemProps {
  title: string;
  subtitle: string;
  imgURL: string;
}

const EventItem = ({title, subtitle, imgURL}: EventItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imgURL}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default EventItem;
