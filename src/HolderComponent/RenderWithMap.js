import {Text, View} from 'react-native';
import React, {Component} from 'react';

export default class RenderWithMap extends Component {
    listStudent = [
        {name: 'NguyenVanA', age: 30},
        {name: 'NguyenVanB', age: 30},
        {name: 'NguyenVanC', age: 30},
        {name: 'NguyenVanD', age: 30},
        {name: 'NguyenVanE', age: 30},
    ];
    renderListStudent = () => {
        const jsArray = [];
        for (let index = 0; index < this.listStudent.length; index++) {
            const backgroundColor = index % 2 === 0 ? '#bff' : '#eee';
            const element = (
                <View key={index} style={[styles.content, {backgroundColor}]}>
                    <Text style={styles.txt}>
                        Ten : {this.listStudent[index].name}
                    </Text>
                    <Text style={styles.txt}>
                        Tuoi : {this.listStudent[index].age}
                    </Text>
                </View>
            );
        }
    };

    renderListStudentWithMap = () => {};
    render() {
        return (
            <View style={styles.container}>
                <Text> Render with Map</Text>
                {/* <View style={styles.content}>
                    <Text style={styles.txt}>
                        Ten : {this.listStudent[0].name}
                    </Text>
                    <Text style={styles.txt}>
                        Tuoi : {this.listStudent[0].age}
                    </Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.txt}>
                        Ten : {this.listStudent[0].name}
                    </Text>
                    <Text style={styles.txt}>
                        Tuoi : {this.listStudent[0].age}
                    </Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.txt}>
                        Ten : {this.listStudent[0].name}
                    </Text>
                    <Text style={styles.txt}>
                        Tuoi : {this.listStudent[0].age}
                    </Text>
                </View> */}
                {this.renderListStudent()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        backgroundColor: 'grey',
        borderRadius: 8,
        width: '80%',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontSize: 30,
        fontWeight: '700',
    },
});
