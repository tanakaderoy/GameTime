import React from 'react';
import {TextInput, View} from 'react-native';
import IconSearch from './MagnifyingGlass';
import styles from './SearchBar.styles';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

function SearchBar({
  value,
  onChangeText,
  placeholder,
}: SearchBarProps): React.ReactElement {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <IconSearch width={25} height={25} />
      </View>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
}

export default SearchBar;
