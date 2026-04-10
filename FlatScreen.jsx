import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web'

const FlatScreen = () => {
  return (
    <View>
      <Text style={{fontSize:24,fontWeight:"bold", textAlign:'center'}}>FlatCard</Text>
      <ScrollView  >
        <View   style={styles.cont}>
             <View style={[styles.card,styles.cardOne]}>
            <Text>Orange</Text>
        </View>
         <View style={[styles.card,styles.cardTwo]}>
            <Text>Blue</Text>
        </View>
         <View style={[styles.card,styles.cardThree]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text>Green</Text>
        </View>
        </View>
       
       
      </ScrollView>
    </View>
  )
}

export default FlatScreen

const styles = StyleSheet.create({
    cont:{
      flex:1,
      flexDirection:'row'
    },
    card:{
        flex:1,
        width:100,
        height:100,
        justifyContent:'center',
        
        alignItems:'center',
        borderRadius:4,
        margin:4
       
    },
    cardOne:{
        backgroundColor:"orange"
    },
     cardTwo:{
        backgroundColor:"blue"
    },
     cardThree:{
        backgroundColor:"green"
    },
})