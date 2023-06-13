import React,{useState,useContext} from "react";

import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = ({ navigation }) => {

  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const { isLoading,login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading}/>
      <View style={styles.wrapper}>
        <TextInput style={styles.input}
                   inputMode={ 'tel'}
                   value={phone}
                   placeholder="Ваш номер телефона"
                   onChangeText={text=>setPhone(text)}
        />
        <TextInput style={styles.input}
                   value={password}
                   placeholder="П А Р О Л Ь"
                   onChangeText={text=>setPassword(text)}
                   secureTextEntry />
        <Button style={styles.link} title="В Х О Д" onPress={()=>{login(phone,password)}}/>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={()=>{navigation.navigate('Register')}}>
          <Text>регистрация</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop:100,
  },
  wrapper: {
    width: "80%",
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link:{
    color:'blue'
  }
});
export default LoginScreen;
