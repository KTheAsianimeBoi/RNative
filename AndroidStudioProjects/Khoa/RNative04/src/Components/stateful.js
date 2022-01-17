import React, { Component } from 'react'; 

class Stateful extends Component {
    render(){
        return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40, fontWeight: '700'}}>
        Hello React Native Application Stateful component
      </Text>
    </View>
        );
        }
}


export default Stateful