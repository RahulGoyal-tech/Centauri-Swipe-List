import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

let i = 0

const App: React.FC<{}> = () => {

  i++;
  console.log(i);
  const [list , setList] = useState(
    [
      {key:1, title: 'Hello1'},
      {key:2, title: 'Hello2'},
      {key:3, title: 'Hello3'},
      {key:4, title: 'Hello4'},
      {key:5, title: 'Hello5'},
      {key:6, title: 'Hello6'},
      {key:7, title: 'Hello7'},
      {key:8, title: 'Hello8'},
      {key:9, title: 'Hello9'},
      {key:10, title: 'Hello10'}
    ]
  )

  const Del = (swipeData : any, data: any) => {
    console.log(swipeData)
    console.log(data.translateX)
    if(data.translateX < 0){
      const newlist = list;
      const ind = list.findIndex(item => item.key === swipeData);
      newlist.splice(ind,1);
      setList(newlist)
    }
    console.log(list)
  }

  const rndr = (data: any) => {
    console.log(data)
    return(
      <View>
          <Text style = {{color: 'white', backgroundColor: 'black', padding: 10, margin: 10, fontSize: 20}}>
            {data.item.key}{')\b'}{data.item.title}
          </Text>
      </View>
    )
  }

  return(
    <View>
      <SwipeListView
        disableRightSwipe = {true}
        data = {list}
        renderItem = {rndr}
        renderHiddenItem = {()=><Text style = {{color: 'white', backgroundColor: 'red', padding: 14, margin: 10, textAlign: 'right'}}>Delete</Text>}
        swipeGestureEnded = {Del}
        useNativeDriver = {false}
      />
    </View>
  )
}

export default App;