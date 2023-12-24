import { View, Text, TouchableOpacity } from 'react-native'
import Checkbox from 'expo-checkbox'
import FontIcon from '@expo/vector-icons/FontAwesome'
import { styles } from './styles'

export interface TaskCardProps {
  description: string
  isCompleted: boolean
  handleTaskStatus: () => void
  handleTaskRemove: () => void
}

export function TaskCard({
  description,
  isCompleted,
  handleTaskStatus,
  handleTaskRemove,
}: TaskCardProps) {
  const checkBoxColor = isCompleted ? '#5E60CE' : '#4EA8DE'
  const descriptionStyle = isCompleted
    ? styles.descriptionWithTrought
    : styles.description

  return (
    <View style={styles.container}>
      <Checkbox
        value={isCompleted}
        onValueChange={handleTaskStatus}
        color={checkBoxColor}
        style={styles.checkbox}
      />
      <Text style={descriptionStyle}>{description}</Text>
      <TouchableOpacity onPress={handleTaskRemove}>
        <FontIcon name="trash-o" size={22} style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}
