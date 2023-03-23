import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  textInput: {
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    flex: 1,
    fontSize: 20,
  },
  iconContainer: {
    width: 50,
    borderColor: '#000000',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
