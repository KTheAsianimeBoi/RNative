import {Text, View, FlatList} from 'react-native';
import React, {Component} from 'react';
// import Alto_icon from './Game_images/Game_Images/Alto_icon.png';
// import Pillar_icon from './Game_images/Game_Images/Pillar_icon.png';
// import Genshin_icon from './Game_Images/Game_Images/Genshin_icon.png';
// import Among_icon from './Game_images/Game_Images/Among_icon.png';

import Icon from 'react-native-vector-icons/FontAwesome';
export default class ExamRenderWithMap extends Component {
    gameData = [
        {
            id: 0,
            title: "Alto's Odyssey",
            icon: Alto_icon,
            subTitle:
                'Just beyond the horizon sits a majestic desert, vast and unexplored.',
            backgroundColor: '#824671CC',
        },
        {
            id: 1,
            title: 'The Pillar',
            icon: Pillar_icon,
            subTitle: 'Dozens of challenging puzzles to solve!',
            backgroundColor: '#ab784fCC',
        },
        {
            id: 2,
            title: 'Genshin Impact',
            icon: Genshin_icon,
            subTitle:
                'Step into Teyvat, a vast world teeming with life and flowing with elemental energy',
            backgroundColor: '#3e3024CC',
        },
        {
            id: 3,
            title: 'Among Us',
            icon: Among_icon,
            subTitle: 'Beware of the importer',
            backgroundColor: '#ffde29CC',
        },
    ];

    render() {
        return (
            <View>
                <Text style={styles.txt}>Tôi Là Lê Trần Minh Khoa</Text>
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
