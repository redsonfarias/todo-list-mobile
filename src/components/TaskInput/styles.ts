import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: -28,
    marginBottom: 36
  },
  input: {
    flex: 1,
    height: 54,
    padding: 16,
    borderRadius: 6,
    backgroundColor: '#262626',
    color: '#F2F2F2',
    fontSize: 16
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E6F9F',
    height: 52,
    width: 52,
    borderRadius: 6,
  },
  icon: {
    color: '#F2F2F2'
  }
})