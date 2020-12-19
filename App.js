/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

class App extends Component{
  state={
    score:0,
    button_name:'push',
  }

  onPush(){
    this.setState({
      score:this.state.score+1
    })
    console.log(this.state.score);
  }

  render(){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:20, padding:'4%', margin:'4%'}}>{'점수: '+this.state.score}</Text>
        <Button onPress={()=>this.onPush()} style={{padding:'4%', margin:'4%'}} title={this.state.button_name}></Button>
      </View>
    )
  }
}

export default App;
