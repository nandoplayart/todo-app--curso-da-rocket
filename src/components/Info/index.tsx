import { Text, View } from 'react-native'
import React from 'react'
import styles from './styles'

export type InfoProps ={
    total: number,
    totalDone: number
}

const Info = ({total, totalDone}: InfoProps) => {
  return (
    <View style={styles.container}>
        <View style={styles.itemContainer}>
            <Text style={[styles.text,styles.textCreated]}>Criadas</Text>
            <View style={styles.containerTotal}>
                <Text style={styles.textTotal}>{total}</Text>
            </View>
        </View>
     
        <View style={styles.itemContainer}>
            <Text style={[styles.text,styles.textDone]}>Concluidas</Text>
            <View style={styles.containerTotal}>
                <Text style={styles.textTotal}>{totalDone}</Text>
            </View>
        </View>
    </View>
  )
}

export default Info

