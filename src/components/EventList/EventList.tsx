import React from 'react';
import {FlatList} from 'react-native';
import {Event} from '../../utils/EventItem';
import EventItem from '../EventItem/EventItem';
import styles from './EventList.styles';

interface EventListProps {
  data: Event[];
}

function EventList({data}: EventListProps): React.ReactElement {
  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.container}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <EventItem
              {...item}
              // title={item.title}
              // subtitle={item.subtitle}
              // imgURL={item.imgURL}
            />
          );
        }}
      />
    </>
  );
}

export default EventList;
