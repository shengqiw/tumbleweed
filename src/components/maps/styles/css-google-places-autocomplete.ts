import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  viewContainer: {
    zIndex: 1,
    position: 'absolute',
    width: '90%'
  },
  searchContainer: {
    flex: .2,
    width: '100%',
  },
  textInput: {
    flex: 0,
    width: '95%',
    alignItems: 'center',
    height: '100%',
    borderRadius: 0,
    backgroundColor: 'snow',
    paddingBottom: 0,
    borderBottomWidth: 1
  },
  textInputContainer: {
    marginTop: '2%',
    justifyContent: 'center'
  },
  listView: {
    width: '95%',
    alignSelf: 'center',
  },
  row: {
    alignItems: 'center',
    backgroundColor: 'ghostwhite',
  }
});
