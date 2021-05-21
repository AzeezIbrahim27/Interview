import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
export default function LoadingPage() {
  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
          <AntDesign name="weibo-circle" size={30} color="#523A28" />
          <Text style={styles.logoText}> KOFFEELOAD</Text>
        </View>    
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0b49f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center'
    // height: 20
  },
  logoText: {
    fontSize:30,
    letterSpacing:2,
    fontWeight: 'bold',
    color: '#523A28'
  },
})
