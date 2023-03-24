import {View } from 'react-native'
import React, { useState } from 'react'
import uuid from 'react-native-uuid'
import styles from './styles'
import Header from '../../components/Header'
import NewTask from '../../components/NewTask'
import TaskList from '../../components/TaskList'
import TaskProps from '../../models/model'
import Info from '../../components/Info'


const Home = () => {

  const [tasks,setTasks] = useState<TaskProps[]>([]);

  const addTaskHandler = (title:string)=>{
    const task ={id: uuid.v4().toString(), title: title, done: false};
    setTasks((current) => [...current, task]);
  }

  const removeTaskHandler = (id:string) =>{
    setTasks(current => current.filter(task => task.id !== id));
  }

  const checkTaskHandler = (task: TaskProps) =>{
    const index = tasks.findIndex(t => t.id === task.id);
    const updateTask = tasks[index];
    updateTask.done = task.done;

    let newTasks = [...tasks];
    newTasks[index] = updateTask;
    setTasks(newTasks.sort((a,b) => Number(a.done) - Number(b.done)));
  }

  const total = tasks.length;
  const totalDone = tasks.filter(task => task.done).length;

  return (
    <View style={styles.container}>
     <Header />
     <NewTask addTask={addTaskHandler} />
     <Info total={total} totalDone={totalDone} />
     <TaskList data={tasks} onDeleteTask={removeTaskHandler} onCheckTask={checkTaskHandler} />
    </View>
  )
}

export default Home

