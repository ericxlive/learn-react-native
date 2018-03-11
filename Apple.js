import React, { Component } from 'react';
import { Image } from 'react-native';

class Apple extends Component{
   render(){
        let src = {
            uri : 'https://cdn3.iconfinder.com/data/icons/fruits-8/512/apple-128.png'
        };
       return (<Image source={src} style={{width:128, height:128}}/>);
   }
}

export default Apple;