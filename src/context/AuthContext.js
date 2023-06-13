import React, { createContext, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const register = (phone, password) => {
    setIsLoading(true);
    axios.post(`${BASE_URL}`, {
      phone, password,
    }).then(res => {
      let userInfo = res.config.data;
      setUserInfo(userInfo);
      AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
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
      let userInfo = res;
      console.log(res);
      setUserInfo(userInfo);
      AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
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
        {}
      )
      .then(res => {
        console.log(res.config.data);
        AsyncStorage.removeItem("userInfo");
        setUserInfo({});
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`logout error ${e}`);
        setIsLoading(false);
      });
  };


  return (
    <AuthContext.Provider value={{ isLoading, userInfo, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

