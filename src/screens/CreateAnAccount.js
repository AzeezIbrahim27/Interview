import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <AntDesign name="weibo-circle" size={30} color="#523A28" />
          <Text style={styles.logoText}> KOFFEELOAD</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.textheader}>Create an Account</Text>
        <View style={styles.form}>
          <Text style={styles.formtext}>Name</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.form}>
          <Text style={styles.formtext}>Email</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.form}>
          <Text style={styles.formtext}>Password</Text>
          <TextInput 
            style={styles.textInput}
            autoFocus={true}
            secureTextEntry={true} 
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.formtext}>Confirm Password</Text>
          <TextInput 
            style={styles.textInput}
            autoFocus={true}
            secureTextEntry={true} 
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
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
    flex:0.15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formtext:{
    fontSize: 16,
    color: 'black'
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
  body:{
    flex:0.80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textheader:{
    color: 'black',
    fontSize: 25,
  },
  form: {
    width:'70%',
    paddingVertical:0.50,
    marginVertical:10,
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
    width:'70%',
    height: 44,
    backgroundColor: '#523A28',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    marginVertical: 30,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  text: {
    fontSize:15, 
    color: '#fff'
  },
  footer: {
    flex: 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

})
