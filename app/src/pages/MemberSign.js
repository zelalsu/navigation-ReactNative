import React, { useState } from 'react'
import { SafeAreaView} from 'react-native'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'

function MemberSign({navigation}) {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userHometown, setUserHometown] = useState(null);

function handleSubmit(){
//girilen değerleri göndermek için 
  const user={
    userName,
    userSurname,
    userAge,
    userMail,
    userHometown,
  }
  navigation.navigate('MemberResult',{user})
}
  return (
    <SafeAreaView  >
      <Input label="Üye Adı" placeholder="Üye İsmini Giriniz..." onChangeText={setUserName} />
      <Input label="Üye Soyadı" placeholder="Üye Soyismini Giriniz..." onChangeText={setUserSurname} />
      <Input label="Üye Yaşı" placeholder="Üye Yaşını Giriniz..." onChangeText={setUserAge} />
      <Input label="Üye E-posta" placeholder="Üye E-posta Adresini Giriniz..." onChangeText={setUserMail} />
      <Input label="Üye Memleketi" placeholder="Üyenin Memleketini Giriniz" onChangeText={setUserHometown} />
      <Button onPress={handleSubmit} title='Kaydı Tamamla'/>
    </SafeAreaView>
  )
}

export default MemberSign