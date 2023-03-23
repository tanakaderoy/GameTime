import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {EventList, Logo, SearchBar} from '../../components';
import useDebounce from '../../hooks/useDebounce';
import useSearch from '../../hooks/useSearch';
import {SearchResponse} from '../../models/SearchResponse';
import {toEvent} from '../../utils/EventItem';
import styles from './SearchScreen.styles';

interface SearchScreenProps {}

function SearchScreen({}: SearchScreenProps): React.ReactElement {
  const [query, setQuery] = useState('');

  const debouncedQuery = useDebounce(query, 200);
  const [data, loading] = useSearch<SearchResponse>(debouncedQuery);

  let eventData = toEvent(data);

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <SearchBar
        value={query}
        onChangeText={setQuery}
        placeholder="Search for Event Venue Artist"
      />
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
      {eventData && eventData.length > 0 && <EventList data={eventData} />}
    </View>
  );
}

export default SearchScreen;
