import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';


export default class UI extends Component {
    render() {
        return(

            <View style={styles.container}>

    <View style={styles.box}>
        <Text style={styles.textInfo}>Purple</Text>
    </View>
    <View style={[styles.box,{backgroundColor:'blue'}]}>
        <Text style={styles.textInfo}>Blue</Text>
    </View>
    <View style={[styles.box,{backgroundColor:'green'}]}>
        <Text style={styles.textInfo}>Green</Text>
    </View>
    <View style={[styles.box,{backgroundColor:'yellow'}]}>
        <Text style={styles.textInfo}>Yellow</Text>
    </View>
</View>
)
}
}


const styles=StyleSheet.create({
box:{
    flex: 1,
    backgroundColor:'purple',
    marginVertical:10,
    justifyContent: 'center',
    alignItems: 'center',
},
container:{
    flex:1,
    paddingVertical:50,
    paddingHorizontal:15,
    justifyContent: 'space-between',
    borderRadius: 10,
},
textInfo:{
    fontSize:30,
    fontWeight: 'bold',
}

})