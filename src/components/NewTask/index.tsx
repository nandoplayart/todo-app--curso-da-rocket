import { TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {Ionicons} from '@expo/vector-icons';
import styles from './styles'
import Colors from '../../configurations/Colors'


type Props = {
    addTask: (taskName:string) => void
}

const NewTask = ({addTask}: Props) => {

  const [taskName, setTaskName] = useState('');  

  const handler = ()=>{

    addTask(taskName);
    setTaskName('');
  }  

  return (
    <View style={styles.container}>
     <TextInput 
        onChangeText={setTaskName}
        value={taskName}
        style={styles.input} 
        placeholder='Adicione uma nova tarefa' 
        placeholderTextColor={Colors.Base.gray300} />
     <TouchableOpacity style={styles.button} onPress={handler}>
        <Ionicons size={22} name='add-circle-outline' style={styles.buttonText}></Ionicons>
     </TouchableOpacity>
    </View>
  )
}

export default NewTask

