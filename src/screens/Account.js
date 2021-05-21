import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Entypo, AntDesign, MaterialIcons, Ionicons, FontAwesome5, MaterialCommunityIcons, Fontisto, Feather  } from '@expo/vector-icons';


export default function Account() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Account</Text>
            <Text style={styles.welcomeText}> Welcome Adedie!</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>My Coffee Account</Text> 
            <TouchableOpacity style={styles.bottonContainer}>
            <View style={styles.bottonContainerOne}>
            <MaterialIcons name="receipt-long" size={24} color="black" />
                <Text style={styles.text}>Orders</Text>
               </View>
                <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottonContainer}>
                <View style={styles.bottonContainerOne}> 
                <MaterialCommunityIcons name="file-document-edit-outline" size={24} color="black" />
                <Text style={styles.text}>Pending Orders</Text>
                </View>
                <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottonContainer}>
            <View style={styles.bottonContainerOne}> 
            <Entypo name="heart-outlined" size={24} color="black" />
                <Text style={styles.text}>Saved Orders</Text>
            </View>
                <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottonContainer}>
              <View style={styles.bottonContainerOne}> 
                <Entypo name="cycle" size={24} color="black" />
                <Text style={styles.text}>Recently Viewed</Text>
                </View>
                <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
                <Text style={styles.ext}>My Settings</Text>
            <TouchableOpacity style={styles.bottonContainer}>
            <View style={styles.bottonContainerOne}> 
                <Ionicons name="person" size={24} color="black" />
                <Text style={styles.text}>My Account Settings</Text>
                </View>
                <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottonContainer}>
            <View style={styles.bottonContainerOne}> 
                <MaterialIcons name="payment" size={24} color="black" />    
                <Text style={styles.text}>Payment Method</Text>
                </View>
                <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottonContainer}>
            <View style={styles.bottonContainerOne}> 
            <Ionicons name="shield-checkmark-outline" size={24} color="black" />
                <Text style={styles.text}>Security</Text>
                </View>
                <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutbutton}>
            <Text style={styles.logoutext}>Log Out</Text>
            </TouchableOpacity>
      </View>
      <View style={styles.footer}>
          <View style={styles.footer1}>
            <Ionicons name="md-home" size={24} color="black" />
            <Text>home</Text> 
          </View>
          <View style={styles.footer1}>
            <Fontisto name="shopping-store" size={24} color="black" />
            <Text style={styles.footerText}>Shop</Text>
          </View>
            <View style={styles.footer1}>
                <Ionicons name="person" size={24} color="black" />
                <Text>Account</Text>
            </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  header: {
    flex:0.20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A47551'
  },
  logoContainer: {
    width: '100%',
    paddingHorizontal:5,
  },
  logoText: {
    fontSize:30,
    letterSpacing:2,
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 14,
    paddingTop:4
  },
  body:{
    flex:0.80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottonContainer:{
    height: 50,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    justifyContent:'space-between',
  },
  bottonContainerOne:{
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  text:{
    fontSize:22,
    fontWeight: 'bold',
    alignSelf:'flex-start'
  },
  logoutext:{
    fontSize:15,
    alignSelf:'center',
    color: 'white'
  },
  logoutbutton: {
    width:'60%',
    height: 50,
    backgroundColor: '#523A28',
    borderRadius: 10,
    justifyContent: 'center',
    paddingVertical: 20,
    marginVertical: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  text: {
    fontSize:15, 
    fontWeight: 'bold',
    color: '#000',
    padding: 2,
    alignItems: "flex-start",
    justifyContent: 'flex-start'
  },
  footer: {
    flex: 0.08,
    alignItems: 'center',
    justifyContent:'space-between',
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
  },
  footer1: {
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
  },
})
