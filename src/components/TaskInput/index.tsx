import { TextInput, TextInputProps, View, TouchableOpacity, Keyboard } from 'react-native'
import MaterialIcon from '@expo/vector-icons/MaterialIcons'
import { styles } from './styles'

interface TaskInputProps extends TextInputProps {
  handleTaskAdd: () => void
}

export function TaskInput({handleTaskAdd, ...props}: TaskInputProps) {
  const buttonDisabled = !props.value

  function onPress() {
    handleTaskAdd()
    Keyboard.dismiss()
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        {...props}
      />
      <TouchableOpacity onPress={onPress} disabled={buttonDisabled} style={styles.button}>
        <MaterialIcon name='add-circle-outline' size={22} style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}
