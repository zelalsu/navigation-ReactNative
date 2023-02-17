import React from 'react'
import { StyleSheet, Text, View,Button} from 'react-native'

function MemberResult({ route,navigation}) {

  const { user } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.inner_text}>
        <Text style={styles.label} >Kayıt Tamamlandı!</Text>
        <Text style={styles.text} > Üye Adı: {user.userName} </Text>
        <Text style={styles.text}> Üye Soyadı: {user.userSurname}</Text>
        <Text style={styles.text}> Üye Yaş: {user.userAge}</Text>
        <Text style={styles.text}> Üye E-posta: {user.userMail}</Text>
        <Text style={styles.text}> Üye Memleketi: {user.userHometown}</Text>
        <Button title='Ana Sayfaya dön' onPress={()=>navigation.goBack('Welcome')}></Button>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  
  },
  label: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    color: 'black',
    borderWidth: 1,

  
  },
  inner_text: {
    margin: 10,
    padding: 1,
        


  },
  text: {
    margin: 7,
    fontSize: 20,
    borderWidth: 1,
    color: '#CD5C5C',
         borderColor: '#bdbdbd',

  }

})
export default MemberResult