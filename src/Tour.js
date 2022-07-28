import React, { Component } from 'react'

import { View, StyleSheet, Text, TouchableHighlight, Image } from 'react-native'

export default class Tour extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container1}>
                    <Text style={styles.text1}>Images/Illustrations</Text>

                </View>
                <Text style={styles.text2}>App tour title</Text>
                <Text style={styles.text3}>The app tour description goes here.</Text>
                <View style={styles.container2}>
                    <TouchableHighlight style={styles.buttonveiw}>
                        <Image source={require('../assets/arw.png')} style={styles.image}>

                        </Image>

                    </TouchableHighlight>

                </View>


            </View>

        )


    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    container1: {
        width: 385,
        height: 540,
        borderRadius: 12,
        backgroundColor: '#F3F3F3',
        marginTop: 12,
        marginLeft: 12,

    },
    text1: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#000000',
        marginLeft: 121,
        marginTop: 263,
    },
    text2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 56,
        marginLeft: 127
    },
    text3: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#9F9F9F',
        marginLeft: 75,

    },

    container2: {
        width: 75,
        height: 75,
        backgroundColor: 'white',
        borderWidth: 5,
        borderColor: '#E5E5E5',
        borderRadius: 15,
        marginLeft: 152,
        marginTop: 52,
        borderRightColor: '#00C458',
        shadowColor: '#00C4583D'




    },
    buttonveiw: {
        width: 56,
        height: 56,
        backgroundColor: '#00C458',
        borderRadius: 5,
        marginTop: 5,
        marginLeft: 5

    },
    image: {
        marginLeft: 21,
        marginTop: 22
    }
})