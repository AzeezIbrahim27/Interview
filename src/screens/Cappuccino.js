import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import { Entypo, AntDesign, MaterialIcons, Ionicons, FontAwesome5, MaterialCommunityIcons, Fontisto, Feather  } from '@expo/vector-icons';

export default function Cappuccino() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </View>
        <View style={styles.form}>
          <TextInput style={styles.textInput} >
          <AntDesign name="search1" size={24} color="#A47551" />         
          <Text style={styles.textheader}>Search</Text>
          </TextInput>
        </View>
      </View>
            
      <View style={styles.body}>
        
        <View style={styles.banner}>
          <ImageBackground source={require('../../assets/bg.jpg')}
            style={{flex:1, width:'100%', height:null, borderRadius: 20, shadowColor: 'black', shadowRadius: 10}}
          >
            <View style={styles.textContainer}>
              <Text style={styles.bannerTextInput}>
                Corretto
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.cartContainer}>
        </View>
        <Text>Colombia Caturra coffee is famous for its dark fruit aromas and flavour of blackberry and cherry. 
          It also features notes of toasted almond and toasted sourdough.
        </Text>
        <Text style={styles.textproductname}>C.Macchiatto</Text>
        <Text style={styles.textproductprice}>£40.00</Text>
        <View style={styles.cartContainer}>
        <TouchableOpacity style={styles.bottonContainer}>
          <MaterialIcons name="arrow-drop-down" size={24} color="black" />
              <Text style={styles.text}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottonContainer1}>
            <Text style={styles.addToCart}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.textproductname}>Top Selling Coffe</Text> 
        <View style={styles.cartContainer}>
          <View style={styles.cart}>
          <Image source={require('../../assets/cup2.jpg')}
            style={{flex:1, width:'80%', height:null, borderRadius: 15, 
            alignSelf: 'center', marginTop:5}} />
            <Text style={styles.productNameText}>cappuccino</Text>
            <Text style={styles.priceText}>£20.00</Text>
            <TouchableOpacity style={styles.AddToCartbotton}>
              <Text style={styles.textCart}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cart}>
          <Image source={require('../../assets/cup1.jpg')}
            style={{flex:1, width:'80%', height:null, borderRadius: 15, 
            alignSelf: 'center', marginTop:5}} />
            <Text style={styles.productNameText}>cappuccino</Text>
            <Text style={styles.priceText}>£20.00</Text>
            <TouchableOpacity style={styles.AddToCartbotton}>
              <Text style={styles.textCart}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cart}>
          <Image source={require('../../assets/cup3.jpg')}
            style={{flex:1, width:'80%', height:null, borderRadius: 15, 
            alignSelf: 'center', marginTop:5}} />
            <Text style={styles.productNameText}>cappuccino</Text>
            <Text style={styles.priceText}>£20.00</Text>
            <TouchableOpacity style={styles.AddToCartbotton}>
              <Text style={styles.textCart}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    backgroundColor: '#D0B49F',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  header: {
    flex: 0.1,
    width: '80%',
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop:10,
  },
  headerContainer: {
    flex: 0.1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textContainer:{
    backgroundColor:'black',
    height:40,
    opacity: 0.7,
    marginTop: '53%',
    justifyContent: 'center'
  },
  textheader:{
    fontSize: 18,
    color: '#A47551'
  },
  form: {
    flex: 0.5,
    width:'100%',
    paddingVertical:3,
    
  },
  textInput:{
    width:'100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius:10,
    marginVertical:15,
    padding:5
  },
  body: {
    flex: 0.80,
    width: '80%',
    marginTop: 35,
    marginBottom: 20,
  },
  banner: {
    flex: 1,
    width:'100%',
  },
  bannerTextInput:{
    fontSize: 30, 
    justifyContent: 'center',
    color: 'white',
    alignSelf: 'center'
},
  textproductname:{
    fontSize: 15,
    fontWeight: 'bold',
  },
  textproductprice:{
    fontSize: 25,
    fontWeight: 'bold',
  },
  addToCart:{
    fontSize: 12,
    color:'white'
  },
  cartContainer: {
    width:'100%',
    // backgroundColor: '#fff',
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
  },
  cart: {
    width:'30%',
    height: 150,
    backgroundColor: '#E4D4C8',
    borderRadius: 10,
    // paddingVertical:10,
  },
  cartTextInput:{
    width:'40%',
    height: 170,
    backgroundColor: 'red',
    borderRadius:10,
    marginVertical:15,
    padding:6
  },
  bottonContainer:{
    height: 60,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    marginTop: 10,
    marginHorizontal:2,
    flexDirection: 'row',
  },
  bottonContainer1:{
    height: 60,
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#523A28',
    marginTop: 10,
    marginHorizontal:2,
    flexDirection: 'row',
  },
  productNameText:{
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginHorizontal:20,
    marginTop: 3
  },
  priceText:{
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 8,
    color: 'black',
    marginHorizontal:40,
    marginTop: 3
  },
  AddToCartbotton:{
    height: 30,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#523A28',
    marginTop: 10,
    marginHorizontal:20,
    marginVertical: 10,
  },
  textCart:{
    fontSize:11,
    color: 'white'
  },
  footer: {
    flex: 0.10,
    alignItems: 'center',
    justifyContent:'space-between',
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    width: '100%',
  },
  footer1: {
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
  },

})
