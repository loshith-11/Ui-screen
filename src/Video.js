import React, { Component } from 'react'

import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native'


export default class Video extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/ply.png')} style={styles.img1}></Image>
                <View style={styles.box1}>
                    <View style={styles.vertical}></View>
                    <View style={styles.horizontal}></View>
                    <Text style={styles.txt1}>Long Chapter Name can be{'\n'}here shown here</Text>
                    <Text style={styles.txt2}>Download</Text>
                    <Image source={require('../assets/dwnl.png')} style={styles.img2}></Image>
                    <Image source={require('../assets/arrw.png')} style={styles.img3}></Image>
                    <Text style={styles.txt3}>Previous</Text>
                    <View style={styles.circle2}></View>
                    <View style={styles.circle3}></View>
                    <Text style={styles.txt4}>Part 1</Text>
                    <Image source={require('../assets/arrw.png')} style={styles.img4}></Image>
                    <Text style={styles.txt5}>Next</Text>

                    <View style={styles.container1}>
                        <View style={styles.horizontal}></View>
                        <View style={styles.box2}></View>
                        <Text style={styles.txt6}>Your sample question can be shown here{'\n'}no matter how long</Text>
                        <View style={styles.circle4}></View>
                        <View style={styles.box3}></View>
                        <Text style={styles.txt7}>Ask a question?</Text>
                        <TouchableHighlight style={styles.button}>
                            <Text style={styles.buttontxt}>Post</Text>
                        </TouchableHighlight>
                        <View style={styles.box4}>
                            <Image source={require('../assets/whatsapp.png')} style={styles.img5}></Image>
                            <Text style={styles.txt8}>Chat with teacher</Text>

                        </View>

                    </View>


                </View>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: 415,
        height: 235,
        backgroundColor: '#9F9F9F',

    },
    img1: {
        width: 67,
        height: 67,
        marginTop: 84,
        marginLeft: 165,


    },
    box1: {
        width: 415,
        height: 135,
        backgroundColor: '#00202F',
        marginTop: 80,

    },
    txt1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: -70,
        marginLeft: 32
    },
    vertical: {
        height: '40%',
        width: 1,
        backgroundColor: '#446270',
        marginLeft: 300,
        marginTop: 20
    },
    horizontal: {
        borderWidth: 0.5,
        borderColor: '#446270',
        marginTop: 15

    },
    img2: {
        width: 10,
        height: 16,
        marginLeft: 345,
        marginTop: -55
    },
    txt2: {
        fontSize: 8,
        fontWeight: 'bold',
        marginLeft: 330,
        marginTop: -3,

        color: '#FFFFFF'

    },
    circle2: {
        width: 12,
        height: 12,
        backgroundColor: '#00202F',
        borderColor: '#00C458',
        borderRadius: 6,
        borderWidth: 1,
        marginLeft: 190,
        marginTop: -12
    },
    circle3: {
        width: 6,
        height: 6,
        borderRadius: 3,
        borderWidth: 3,
        borderColor: '#00C458',
        marginLeft: 193,
        marginTop: -9


    },
    img3: {
        width: 5.73,
        height: 11.47,
        marginTop: 70,
        marginLeft: 32

    },
    txt3: {
        fontSize: 8,
        fontWeight: 'bold',
        color: '#9F9F9F',
        marginTop: -12,
        marginLeft: 50

    },
    txt4: {
        fontSize: 10,
        fontWeight: 'normal',
        color: '#00C458',
        marginLeft: 210,
        marginTop: -10,

    },
    img4: {
        width: 5.73,
        height: 11.47,
        transform: [{ rotate: '180deg' }],
        marginLeft: 365,
        marginTop: -12

    },
    txt5: {
        fontSize: 8,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginLeft: 335,
        marginTop: -13

    },
    container1: {
        width: 415,
        height: 500,
        backgroundColor: '#00202F',


    },
    box2: {
        width: 355,
        height: 60,
        backgroundColor: '#000000',
        marginLeft: 30,
        marginTop: 215,
        borderRadius: 4,


    },
    txt6: {
        fontSize: 12,
        fontWeight: 'bold',
        padding: 16,
        color: '#FFFFFF',
        marginTop: -65,
        marginLeft: 48
    },
    circle4: {
        width: 30,
        height: 30,
        borderColor: '#707070',
        borderWidth: 3,
        borderRadius: 15,
        marginLeft: 335,
        marginTop: -45,
        backgroundColor: '#707070',

    },
    box3: {
        width: 355,
        height: 48,
        backgroundColor: '#062E40',
        borderColor: '#13394A',
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 30,
        marginLeft: 32
    },
    txt7: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#446270',
        marginTop: -35,
        marginLeft: 75

    },
    button: {
        width: 52,
        height: 32,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 305,
        marginTop: -23


    },
    buttontxt: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#00202F',

    },
    box4: {
        width: 355,
        height: 65,
        borderRadius: 4,
        borderColor: '#00C458',
        borderWidth: 1,
        marginTop: 25,
        marginLeft: 32

    },
    img5: {
        width: 16,
        height: 16,
        marginLeft: 100,
        marginTop: 25

    },
    txt8: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#00C458',
        marginTop: -20,
        marginLeft: 135
    }





})