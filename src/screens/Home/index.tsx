import { useState } from 'react'
import { View, FlatList, Alert, Image, Text } from 'react-native'
import uuid from 'react-native-uuid'
import { Header } from '../../components/Header'
import { TaskInput } from '../../components/TaskInput'
import { Label } from '../../components/Label'
import { TaskCard } from '../../components/TaskCard'
import { styles } from './styles'

interface ITask {
  description: string
  id: string
  isCompleted: boolean
}

export function Home() {
  const [taskDescription, setTaskDescription] = useState('')
  const [tasks, setTasks] = useState<ITask[]>([])

  const tasksCreated = tasks.length
  const tasksCompleted = tasks.filter((task) => task.isCompleted).length

  function handleTaskAdd() {
    const newTask = {
      description: taskDescription,
      id: uuid.v4().toString(),
      isCompleted: false,
    }

    setTasks((state) => [...state, newTask])
    setTaskDescription('')
  }

  function handleTaskStatus(id: string) {
    setTasks((state) =>
      state.map((task) => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted
        }

        return task
      })
    )
  }

  function handleTaskRemove(id: string) {
    Alert.alert(
      'Remover atividade',
      'Tem certeza que deseja remover essa atividade?',
      [
        {
          text: 'Sim',
          onPress: () =>
            setTasks((state) => state.filter((task) => task.id !== id)),
        },
        { text: 'Não', style: 'cancel' },
      ]
    )
  }

  return (
    <>
      <Header />

      <View style={styles.container}>
        <TaskInput
          value={taskDescription}
          onChangeText={(value) => setTaskDescription(value)}
          handleTaskAdd={handleTaskAdd}
        />

        <View style={styles.listHeader}>
          <Label text="Criadas" count={tasksCreated} />
          <Label text="Concluídas" count={tasksCompleted} textColor="purple" />
        </View>

        {tasksCreated === 0 && (
          <View style={styles.empty}>
            <Image source={require('../../../assets/clipboard.png')} />
              <Text style={styles.textEmptyBold}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={styles.textEmpty}>Crie tarefas e organize seus itens a fazer</Text>
          </View>
        )}

        <FlatList
          style={styles.list}
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard
              description={item.description}
              isCompleted={item.isCompleted}
              handleTaskStatus={() => handleTaskStatus(item.id)}
              handleTaskRemove={() => handleTaskRemove(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  )
}
