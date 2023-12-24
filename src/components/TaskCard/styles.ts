import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#262626',
    padding: 12,
    border: '1px solid #333333',
    borderRadius: 6,
    marginBottom: 8
  },
  checkbox: {
    margin: 4,
    borderRadius: 999,
  },
  description: {
    flex: 1,
    color: '#F2F2F2',
    lineHeight: 22
  },
  descriptionWithTrought: {
    flex: 1,
    color: '#808080',
    lineHeight: 22,
    textDecorationLine: 'line-through'
  },
  icon: {
    color: '#808080',
    margin: 4,
  }
})