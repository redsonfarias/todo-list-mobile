import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8
  },
  textBlue: {
    fontWeight: 'bold',
    color: '#4EA8DE'
  },
  textPurple: {
    fontWeight: 'bold',
    color: '#8284FA'
  },
  count: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    backgroundColor: '#333333'
  },
  textCount: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D9D9D9',
  },
})