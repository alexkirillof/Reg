import React, { createContext, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [regPhone, setRegPhone] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [loginPhone, setLoginPhone] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);




  const register = async (phone, password) => {
    setIsLoading(true);
    await axios.post(`${BASE_URL}`, {
      phone, password,
    }).then(res => {
      let userInfo =  res.config.data;
      let parsedData = JSON.parse(userInfo);
      setRegPhone((parsedData.phone);
      console.log(regPhone);
      setRegPassword(parsedData.password);
      AsyncStorage.setItem("regPassword", parsedData.password);
      console.log(regPassword);
      setIsLoading(false);
    }).catch(e => {
      console.log(`register error${e}`);
      setIsLoading(false);
    });
  };


  const login = (phone, password) => {
    setIsLoading(true);
    axios.post(`${BASE_URL}`, {
      phone, password,
    }).then(res => {
      let userInfo = res.config.data;
      let parsedData = JSON.parse(userInfo);
      setLoginPhone(parsedData.phone);
      AsyncStorage.setItem("loginPhone", parsedData.phone);
      console.log(loginPhone);
      console.log(regPhone);
      setLoginPassword(parsedData.password);
      AsyncStorage.setItem("loginPassword", parsedData.password);
      console.log(loginPassword);
      console.log(regPassword);
      if((loginPhone===regPhone)&&(loginPassword===regPassword)){
        setIsAuth(true)
      }
      console.log(isAuth);
      setIsLoading(false);
    }).catch(e => {
      console.log(`register error${e}`);
      setIsLoading(false);
    });
  };

  const logout = () => {
    setIsLoading(true);
    axios
      .post(
        `${BASE_URL}`,
        {},
      )
      .then(res => {
        console.log(res.config.data);
        AsyncStorage.removeItem("isAuth");
        setIsAuth(false);
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`logout error ${e}`);
        setIsLoading(false);
      });
  };


  return (
    <AuthContext.Provider value={{ isLoading, isAuth, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

