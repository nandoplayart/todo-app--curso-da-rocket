import { Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'


import styles from './styles'


const Header = () => {
  return (
    <View style={styles.container}>
      <LottieView style={styles.logo} source={require('../../assets/rocket.json')} autoPlay loop />
      <Text style={[styles.title,styles.to]}>to</Text>
      <Text style={[styles.title,styles.do]}>do</Text>
    </View>
  )
}

export default Header

