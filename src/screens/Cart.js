import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import { Entypo, AntDesign, MaterialIcons, Ionicons, FontAwesome5,EvilIcons, MaterialCommunityIcons, Fontisto, Feather  } from '@expo/vector-icons';

export default function Cart() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.textheader}>Cart</Text>
      </View>
            
      <View style={styles.body}>
        <View style={styles.banner}>
            
          <View style={styles.bannerContainerOne}>
            <View style={[styles.containerOne, {
              marginBottom:null
            }]}>
              <Image source={require('../../assets/cup3.jpg')}
              style={{ width:120, height:60, borderRadius: 15, 
              alignSelf:'flex-start', marginTop:10, 
               marginHorizontal:20}}  />
               
              <View style={styles.bannerText}>
                <Text style={styles.bannerTextContainer}>Cappuccino</Text>
                <Text style={styles.bannerproductprice}>£40.00</Text>
              </View>
            </View>
            <Text style={styles.textRegister}> ────────────────────────────────────────</Text>
            <View style={[styles.containerTwo, ]}>
            <View style={styles.likeBtton}>
              <AntDesign name="hearto" size={24} color="black" />
            </View>
            <View style={styles.removeButton}>
              <EvilIcons name="trash" size={30} color="black" />
              <Text style={styles.removeButtonText}>Remove</Text>
            </View>
            <View style={styles.numberClicksContainer}>
              <AntDesign name="minuscircle" size={24} color="#523A28" />
              <TouchableOpacity style={styles.numberClicksIncreaseText}>
              <Text>1</Text>
            </TouchableOpacity>
            <View>
              <AntDesign name="minuscircle" size={24} color="#523A28" />
            </View>
            </View>
          </View>
          </View>

          <View style={styles.bannerContainerOne}>
            <View style={[styles.containerOne, {
              marginBottom:null
            }]}>
              <Image source={require('../../assets/cup3.jpg')}
              style={{ width:120, height:60, borderRadius: 15, 
              alignSelf:'flex-start', marginTop:10, 
               marginHorizontal:20}}  />
               
              <View style={styles.bannerText}>
                <Text style={styles.bannerTextContainer}>Cappuccino</Text>
                <Text style={styles.bannerproductprice}>£40.00</Text>
              </View>
            </View>
            <Text style={styles.textRegister}> ────────────────────────────────────────</Text>
            <View style={[styles.containerTwo, ]}>
            <View style={styles.likeBtton}>
              <AntDesign name="hearto" size={24} color="black" />
            </View>
            <View style={styles.removeButton}>
              <EvilIcons name="trash" size={30} color="black" />
              <Text style={styles.removeButtonText}>Remove</Text>
            </View>
            <View style={styles.numberClicksContainer}>
              <AntDesign name="minuscircle" size={24} color="#523A28" />
              <TouchableOpacity style={styles.numberClicksIncreaseText}>
              <Text>1</Text>
            </TouchableOpacity>
            <View>
              <AntDesign name="minuscircle" size={24} color="#523A28" />
            </View>
            </View>
          </View>
          </View>
        
        </View>
        <View style={styles.content}>
          <Text style={styles.textproductprice}>Total £40.00</Text>
          <View style={styles.cartContainer}>
              <TouchableOpacity style={styles.bottonContainer1}>
              <Text style={styles.textproductname}>Add to Cart</Text>
              </TouchableOpacity>
          </View>
          <Text style={styles.text}>Top Selling Coffee</Text> 
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
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  header: {
    flex: 0.15,
    width: '100%',
    backgroundColor: '#A47551',
    paddingHorizontal: 20,
   },

  textheader:{
    fontSize: 45,
    color: '#000',
    paddingVertical: 40,
  },
  body: {
    flex: 0.80,
    width: '95%',
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: 'white'
  },
  banner: {
    flex: 1,
    width:'95%',
    marginVertical: 10,
    marginHorizontal: 10,
  },
 
  bannerContainerOne: {
    flex: 1,
    backgroundColor: '#E4D4C8',
    borderRadius: 10,
    flexDirection:'column',
    paddingHorizontal:10,
    marginBottom:0.4
  },
  bannerContainerTwo: {
    flex: 0.5,
    height: 150,
    backgroundColor: '#E4D4C8',
    borderRadius: 10,
    flexDirection:'column',
  },
  containerOne:{
    flex:0.6,
    flexDirection: 'row',
    width:'100%',
   
  },
  containerTwo:{
    flex:0.4,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
    paddingBottom: 10,
    paddingHorizontal: 10
  },
  removeButton:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButtonText:{
      fontSize:20,
      fontWeight: 'bold',
      color: '#000',
  },
  numberClicksContainer:{
    flex:0.70,
    width:'80%',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:70,
    },
    numberClicksIncreaseText:{
    height: 40,
    width: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal:5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerTextContainer: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5
  },
  bannerproductprice:{
    fontSize: 17,
  },
  textproductname:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff'
  },
  text:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal: 11,
    marginTop: 10,
  },
  textproductprice:{
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    justifyContent: 'space-between'
  },
  cartContainer: {
    width:'100%',
    marginVertical: 2,
    flexDirection: 'row',
    justifyContent:'space-evenly',
    flexWrap:'wrap',
  },
  cart: {
    width:'30%',
    height: 150,
    backgroundColor: '#E4D4C8',
    borderRadius: 10,
    marginVertical:15,
    paddingBottom:10,
  },
  bottonContainer1:{
    height: 60,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#523A28',
    marginTop: 10,
    marginHorizontal:20,
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
    marginHorizontal:55,
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
    marginHorizontal:30,
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
