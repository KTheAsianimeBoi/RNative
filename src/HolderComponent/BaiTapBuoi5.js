import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    Image,
} from 'react-native';
import React, {Component} from 'react';
import Angry from './Emoji/angry.png';
import Care from './Emoji/care.png';
import Haha from './Emoji/haha.png';
import Love from './Emoji/love.png';
import Sad from './Emoji/sad.png';
export default class BaiTapBuoi5 extends Component {
    state = {
        source: Haha,
        isPressedHaha: false,
        isPressedLove: false,
        isPressedSad: false,
        isPressedAngry: false,
        isPressedCare: false,
    };
    onPressHaha = () => {
        this.setState({
            style: styles.button,
            isPressedHaha: true,
            isPressedCare: false,
            isPressedLove: false,
            isPressedAngry: false,
            isPressedSad: false,
        });
        this.setState({source: Haha});
    };
    onPressAngry = () => {
        this.setState({
            isPressedHaha: false,
            isPressedCare: false,
            isPressedLove: false,
            isPressedAngry: true,
            isPressedSad: false,
        });
        this.setState({source: Angry});
    };
    onPressSad = () => {
        this.setState({
            isPressedHaha: false,
            isPressedCare: false,
            isPressedLove: false,
            isPressedAngry: false,
            isPressedSad: true,
        });
        this.setState({source: Sad});
    };
    onPressLove = () => {
        this.setState({
            isPressedHaha: false,
            isPressedCare: false,
            isPressedLove: true,
            isPressedAngry: false,
            isPressedSad: false,
        });
        this.setState({source: Love});
    };
    onPressCare = () => {
        this.setState({
            isPressedHaha: false,
            isPressedCare: true,
            isPressedLove: false,
            isPressedAngry: false,
            isPressedSad: false,
        });
        this.setState({source: Care});
    };

    render() {
        return (
            <View style={styles.outsideContainer}>
                <Text style={styles.header}>How do you feel today?</Text>
                <View style={styles.bigContainer}>
                    <Image
                        style={styles.bigIcon}
                        source={this.state.source}
                        resizeMode={'cover'}
                    ></Image>
                </View>
                <View style={styles.smallContainer}>
                    <TouchableHighlight
                        onPress={this.onPressAngry}
                        underlayColor={'green'}
                        style={
                            this.state.isPressedAngry
                                ? this.state.style
                                : styles.buttonNothing
                        }
                    >
                        <Image style={styles.smallIcon} source={Angry}></Image>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.onPressHaha}
                        underlayColor={'green'}
                        style={
                            this.state.isPressedHaha
                                ? this.state.style
                                : styles.buttonNothing
                        }
                    >
                        <Image style={styles.smallIcon} source={Haha}></Image>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.onPressCare}
                        underlayColor={'green'}
                        style={
                            this.state.isPressedCare
                                ? this.state.style
                                : styles.buttonNothing
                        }
                    >
                        <Image style={styles.smallIcon} source={Care}></Image>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.onPressLove}
                        underlayColor={'green'}
                        style={
                            this.state.isPressedLove
                                ? this.state.style
                                : styles.buttonNothing
                        }
                    >
                        <Image style={styles.smallIcon} source={Love}></Image>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.onPressSad}
                        underlayColor={'green'}
                        style={
                            this.state.isPressedSad
                                ? this.state.style
                                : styles.buttonNothing
                        }
                    >
                        <Image style={styles.smallIcon} source={Sad}></Image>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    outsideContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    bigIcon: {
        borderRadius: 125,
        borderWidth: 10,
        borderColor: 'silver',
        margin: 20,
    },
    smallIcon: {
        width: 50,
        height: 50,
        margin: 10,
    },
    bigContainer: {
        justifyContent: 'center',
    },
    smallContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    button: {
        borderRadius: 125,
        borderWidth: 2,
    },
    buttonNothing: {},
});
