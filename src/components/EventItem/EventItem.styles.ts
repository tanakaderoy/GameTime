import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingLeft: 5,
    paddingBottom: 5,
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  header: {
    fontWeight: '700',
  },
  subtitle: {
    color: 'gray',
  },
});

export default styles;
