import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class DemoStyle extends Component {
    render() {
    return (

    <View style={{flex:1}}> 
        <Text> Demo Style Component </Text>
        <View style={{flex:1, justifyContent:'space-between'}}>
            <View style={styles.box}>
            </View>
           <View style={[styles.box,{backgroundColor:'red'}]}></View>
            <View style={{backgroundColor:'bff',
            height: 100, width: 100}}></View>

        </View>
    </View>

)
    }
}

const styles = StyleSheet.create({
    box :{
        width:100, 
        height: 100, 
        backgroundColor:'#bbf',
        borderWidth: 3,
        borderStyle: 'dashed',
        borderColor: 'grey',
    },
    boxPurple :{backgroundColor:'purple'}
});