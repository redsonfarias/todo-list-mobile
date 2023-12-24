import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#1A1A1A',
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  list: {
    marginTop: 20
  },
  empty: {
    marginTop: 10,
    paddingTop: 50,
    alignItems: 'center',
    borderTopColor: '#333333',
    borderTopWidth: 1
  },
  textEmptyBold: {
    color: '#808080',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10
  },
  textEmpty: {
    color: '#808080',
    textAlign: 'center',
    lineHeight: 20
  }
})