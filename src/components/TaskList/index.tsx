import {  FlatList, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {Feather} from '@expo/vector-icons';
import styles from './styles'
import TaskProps from '../../models/model';
import Check from '../Check';
import Colors from '../../configurations/Colors';

type Props ={
    data: TaskProps[],
    onCheckTask: (task: TaskProps) => void,
    onDeleteTask: (id:string) => void
}

const TaskList = ({data,onCheckTask,onDeleteTask}:Props) => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        keyExtractor={(task) => task.title}
        ListEmptyComponent={()=> (<View style={styles.emptyContainer}>
                <Feather style={styles.clipboard} size={45} name='clipboard' color={Colors.Base.gray400} />
                <Text style={[{fontWeight: 'bold'},styles.textEmptyContainer]}>Voçê ainda não tem tarefas cadastradas</Text>
                <Text style={[styles.textEmptyContainer]}>Crie tarefas e organize seus itens a fazer</Text>
        </View>) }
        renderItem={({item}) =>(
          <View style={styles.itemContainer}>
            <Check done={item.done} onCheck={(check) => onCheckTask({id: item.id, title: item.title,done:check})} />
              <Text style={[styles.itemText,item.done && styles.textDone]}>{item.title}</Text>
              <TouchableOpacity onPress={() => onDeleteTask(item.id)}>
                  <Feather size={15} name='trash-2' style={styles.iconDelete}></Feather>
              </TouchableOpacity> 
          </View>  
        )}/>
    </View>
  )
}

export default TaskList;