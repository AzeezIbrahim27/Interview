import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';


export default function CreateAnAccount() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Entypo name="circular-graph" size={24} color="#523A28" />
          <Text style={styles.logoText}> KOFFEELOAD</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.form}>
          <Text>Email</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.form}>
          <Text>Password</Text>
          <TextInput style={styles.textInput} />
          <Text style={styles.forget}>Forget Password</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={styles.footLineContainer}>
          <Text style={styles.textRegister}> ────────  OR  ────────</Text>
        </View>
        <View style={styles.footerbottoncontainer}>
          <TouchableOpacity style={styles.footerbutton}>
            <Text style={styles.footerbottontextInput}>Sign up with Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerbutton}>
            <Text style={styles.footerbottontextInput}>Sign up with Google</Text>
          </TouchableOpacity>
        </View>
        <Text>Terms of Service and Privacy Policy</Text>
      </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#d0b49f',
  },
  header: {
    flex:0.25,
    justifyContent: 'center',
    alignItems: 'center'
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
    color: '#523A28',
  },
  body:{
    flex:0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width:'85%',
    paddingVertical:10,
    marginVertical:2
  },
  textInput:{
    width:'100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius:10,
    marginVertical:15,
    padding:5
  },
  forget:{
    alignSelf:'flex-end'
  },
  button: {
    width:'80%',
    height: 44,
    backgroundColor: '#523A28',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    marginVertical: 30,
  },
  text: {
    fontSize:20, 
    fontWeight: 'bold',
    color: '#fff'
  },
  footer: {
    flex:0.35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footLineContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop:35,
  },
  footerbottoncontainer: {
    flex: 1,
    marginVertical:30,
    width: '80%',
  },
  footerbutton: {
    padding: 1,
    width: '100%',
    height: 44,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 10,
  },
  footerbottontextInput: {
    fontSize:18, 
    color: '#000'
  },
})
