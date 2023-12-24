import { Text, View } from 'react-native'
import { styles } from './styles'

interface LabelProps {
  text: string
  count: number
  textColor?: 'blue' | 'purple'
}

export function Label({ text, count, textColor = 'blue' }: LabelProps) {
  const textStyle = textColor === 'blue' ? styles.textBlue : styles.textPurple

  return (
    <View style={styles.container}>
      <Text style={textStyle}>{text}</Text>
      <View style={styles.count}>
        <Text style={styles.textCount}>{count}</Text>
      </View>
    </View>
  )
}
