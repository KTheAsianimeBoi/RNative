import React, { Component } from 'react';
import {View, Text,StyleSheet} from 'react-native';

export default class BaiTapBon extends Component {
    render() {
        return(
            <View style= {styles.container}>
                <View style={styles.green}>
                    <View style={styles.yellow}>
                     
                    </View>
                    <View style={styles.yellow}>
                  
                    </View>
                </View>

                <View style={styles.purple}>
                    <View style={styles.blue}>
                      
                    </View>
                    <View style={styles.blue}>
                        
                    </View>
                    <View style={styles.blue}>
                        
                    </View>
                    <View style={styles.blue}>
                       
                    </View>
                </View>
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: 'center',
    },
    green: {
        backgroundColor: '#A1c99A',
        flex : 1,
        borderRadius:15,
        marginBottom:10,
        justifyContent:'space-around',
    },
    purple: {
        backgroundColor: '#c8c8fA',
        flex : 1,
        borderRadius:20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-around',
        justifyContent: 'space-around',
    },
    yellow:{
        flex : 1,
        backgroundColor: '#ffffc2',
        borderRadius:20,
        margin: 30,
    },
    blue:{
        backgroundColor: '#4f82c0',
        borderRadius:15,
        width: '38%',
        height: '40%',
        margin :10,
    },
    textInfo:{
        fontSize: 25,
        fontWeight: 'bold',
    }
})