import React, { useState, useEffect, useMemo } from "react";

import { StyleSheet, Text, View, TextInput, ActivityIndicator, FlatList, Image, TouchableOpacity, RefreshControl } from "react-native";
import filter from "lodash.filter";

const API_ENDPOINT = "https://647dde56af984710854a8134.mockapi.io/Posts";

export const TodoList = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fullData, setFullData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showList, setShowList] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    fetchData(API_ENDPOINT);

  }, []);
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      console.log("%c%s", "color: blue;", json[5].name);
      setFullData(json);
      setIsLoading(false);

    } catch (error) {
      setError(error);
      console.log("%c%s", "color: red;", error);
      setIsLoading(false);
    }
  };

  const contains = ( {name} , query) => {
    if (name.includes(query)) {
      return true;
    }
    return false;
  };


  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color="#000000" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Ошибка загрузки данных ...Пожалуйста, проверьте ваше интернет соединение !</Text>
      </View>
    );
  }

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.text}>
     СПИСОК ДЕЛ
        </Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {setShowList(true)}}>
        <Text style={styles.btnText}>ПОЛУЧИТЬ СПИСОК</Text>
      </TouchableOpacity>

      {showList &&  <FlatList
        data={data}
        keyExtractor={(item) => {
          item.id;
        }}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={()=>{setShowList('')}}/>}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (

            <View  key={item.id}>
              <TouchableOpacity style={styles.itemContainer}  onPress={() => navigation.navigate('Article', {id: item.id, name: item.name, email: item.email, avatar: item.avatar, telephone:item.telephone, description:item.description})}>
              <Image source={{ uri: item.avatar }}
                     style={styles.image}
              />
              <View>
                <Text> {item.name} </Text>
              </View>
                </TouchableOpacity>
            </View>

        )}
      />}
    </View>
  );
};


const styles = StyleSheet.create({
  searchBox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    borderColor: "#5c6059",
    borderWidth: 1,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor:'#f3f6f0',
    borderRadius: 25,
    height: 60,
    marginLeft: 10,
    marginTop: 15,
    padding:10
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 30
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  },
  btn:{
    height: 40,
    backgroundColor: "#b9fbb0",
    elevation: 3,
    alignItems:'center',
    borderRadius: 6,
    shadowOffset: {
      width: 2,
      height: 2
    },
    marginBottom: 20,
    marginTop:30,
    padding: 10
  },
  btnText:{
    fontWeight:'bold'
  }
});
