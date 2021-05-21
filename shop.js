import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>
          KOFFEELOAD
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.circle2} />
        <View style={styles.circle2} />
        <View style={styles.circle2} />
        <View style={styles.circle2} />
        <View style={styles.circle2} />
        <View style={styles.circle2} />
        <View style={styles.circle2} />
        <View style={styles.circle2} />
        <View style={styles.circle2} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>Terms of Service and Privacy Policy</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#d0b49f',
  },
  header: {
    flex: 0.5,
    width: '100%',
    backgroundColor: '#d0b49f',
    justifyContent: 'center', 
    alignItems: 'center',  
  },
  body: {
    flex: 2,
    width: '100%',
    backgroundColor: '#d0b49f',
    justifyContent: 'flex-start',
  },
  circle: {
    width:'20%',
    height:100,
    backgroundColor: '#fff'
  },
  circle2: {
  width:'20%',
  height:100,
  backgroundColor: '#fff'
  },
  circle3: {
    width:'20%',
    height:100,
    backgroundColor: '#fff'
  },
  circle4: {
    width:'20%',
    height:100,
    backgroundColor: '#fff'
  },
  circle5: {
    width:'20%',
    height:100,
    backgroundColor: '#fff'
  },
  circle6: {
  width:'20%',
  height:100,
  backgroundColor: '#fff'
  },
  circle7: {
    width:'20%',
    height:100,
    backgroundColor: '#fff'
  },
  circle8: {
    width:'20%',
    height:100,
    backgroundColor: '#fff'
  },
  circle9: {
    width:'20%',
    height:100,
    backgroundColor: '#fff'
  },
  footer: {
    flex: 0.2,
    width: '100%',
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',   
  },
})
