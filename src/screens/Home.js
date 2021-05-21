import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import { Entypo, AntDesign, MaterialIcons, Ionicons, FontAwesome5, MaterialCommunityIcons, Fontisto, Feather  } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Text style={styles.textheader}>Welcome Adedire!</Text>
          <AntDesign name="shoppingcart" size={35} color="#000" />
        </View>
      </View>
            
      <View style={styles.body}>
        <View style={styles.banner}>
          <Image source={require('../../assets/bg.jpg')}
            style={{flex:0.5, width:'100%', height:null, 
            borderRadius: 20, shadowColor: 'black', shadowRadius: 10, marginBottom: 10}} >
          </Image>
          <View style={styles.bodyContainer}>
          <AntDesign name="weibo-circle" size={20} color="#523A28" />
          <Text style={styles.textBody}> KOFFEELOAD</Text>
          </View>
          <Text>We have sourced the finest and rarest coffees, that easily allows coffee lovers to experience 
            one of life's simple pleasures delivered right to your doorstep.</Text>
          <ImageBackground source={require('../../assets/bg.jpg')}
            style={{flex:0.2, width:'100%', height:120, borderRadius: 15, shadowRadius:10 ,marginTop: 10,marginBottom: 10}} >
            <Text style={styles.bannerTextInput}>
              Our Coffee
            </Text>
          </ImageBackground>
        </View>
        <Text style={styles.textproductname}>Top Selling Coffee</Text> 
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
          <TouchableOpacity style={styles.bottonContainer1}>
            <Text style={styles.textproductname}>Create a Coffee Plan</Text>
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
    backgroundColor: '#d0b49f',
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
    alignItems: 'center',
    marginBottom:1,
  },
  textheader:{
    fontSize: 30,
    color: '#000'
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
    marginVertical: 10,
    marginBottom: 25,
  },
  bodyContainer:{
    flex: 0.1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  banner: {
    flex: 1,
    width:'100%',
  },
  textBody:{
    fontSize: 13,
    color: '#523A28',
    letterSpacing:2,
    fontWeight: 'bold',
  },

  cartContainer: {
    width:'100%',
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
  },
  bannerTextInput:{
    fontSize: 30, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:40,
    marginHorizontal: 100,
    color: 'white',
},
  cart: {
    width:'30%',
    height: 150,
    backgroundColor: '#E4D4C8',
    borderRadius: 10,
  },
  bottonContainer1:{
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: 'black', 
    shadowRadius: 10,
    backgroundColor: '#fff',
    marginTop: 10,
    marginHorizontal:5,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
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
