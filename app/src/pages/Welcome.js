import React from 'react'
import { Button, SafeAreaView, Text, StyleSheet } from 'react-native'


function Welcome({navigation}) {
  // function Welcome ({navigation}) {

  //   function goToMemberSign(){

  //       navigation.navigate('MemberSignScreen'); bir diğer yöntem 
  //   }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Kebap Fitness Salonu</Text>
      <Button  color='#CD5C5C'
       title='Üye Kaydı Oluştur' 
        onPress={()=> navigation.navigate('MemberSign')}> </Button>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 10,
  },
 

})
export default Welcome