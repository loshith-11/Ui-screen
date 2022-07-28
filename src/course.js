import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TextInput } from 'react-native'


export default class course extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/Menu.png')} style={styles.img1}></Image>
                <Image source={require('../assets/img.png')} style={styles.img2}></Image>
                <Text style={styles.txt1}>Biology</Text>
                <Text style={styles.txt2}>12 Chapters</Text>
                <Text style={styles.txt3}>124 hours</Text>

                <View style={styles.circle1}></View>
                <View style={styles.circle2}></View>
                <View style={styles.circle3}></View>
                <View style={styles.circle4}></View>

                <View style={styles.container1}>

                    <View style={styles.box1}>
                        <Text style={styles.txt4}>Long chapter name can be shown here.</Text>
                        <Text style={styles.text5}>Chapter 1</Text>
                        <Text style={styles.text6}>3 parts</Text>
                        <View style={styles.circle5}></View>
                        <View style={styles.circle6}></View>
                        <View style={styles.circle7}></View>
                        <View style={styles.circle8}></View>

                        <View style={styles.box2}>
                            <Text style={styles.txt4}>Long chapter name can be shown here.</Text>
                            <Text style={styles.text5}>Chapter 1</Text>
                            <Text style={styles.text6}>3 parts</Text>
                            <View style={styles.circle5}></View>
                            <View style={styles.circle6}></View>
                            <View style={styles.circle7}></View>
                            <View style={styles.circle8}></View>
                        </View>

                        <View style={styles.box3}>
                            <Text style={styles.txt4}>Long chapter name can be shown here.</Text>
                            <Text style={styles.text5}>Chapter 1</Text>
                            <Text style={styles.text6}>3 parts</Text>
                            <View style={styles.circle5}></View>
                            <View style={styles.circle6}></View>
                            <View style={styles.circle7}></View>
                            <View style={styles.circle8}></View>

                        </View>
                        <View style={styles.box3}>
                            <Text style={styles.txt4}>Long chapter name can be shown here.</Text>
                            <Text style={styles.text5}>Chapter 1</Text>
                            <Text style={styles.text6}>3 parts</Text>
                            <View style={styles.circle5}></View>
                            <View style={styles.circle6}></View>
                            <View style={styles.circle7}></View>
                            <View style={styles.circle8}></View>


                        </View>
                        <View style={styles.box3}>
                            <Text style={styles.txt4}>Long chapter name can be shown here.</Text>
                            <Text style={styles.text5}>Chapter 1</Text>
                            <Text style={styles.text6}>3 parts</Text>
                            <View style={styles.circle5}></View>
                            <View style={styles.circle6}></View>
                            <View style={styles.circle7}></View>
                            <View style={styles.circle8}></View>


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
        backgroundColor: '#00202F',



    },
    img1: {
        marginTop: 32,
        marginLeft: 32,
        height: 38,
        width: 38,

    },
    img2: {
        width: 345,
        height: 255,
        marginLeft: 210,
        marginTop: -115


    },
    txt1: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginLeft: 32,
        marginTop: -85,
        marginLeft: 32

    },
    circle1: {
        width: 12,
        height: 12,
        backgroundColor: '#00202F',
        borderColor: '#00C458',
        borderWidth: 1,
        borderRadius: 6,
        marginLeft: 34,
        marginTop: -14
    },
    circle2: {
        width: 12,
        height: 12,
        backgroundColor: '#00202F',
        borderColor: '#00C458',
        borderRadius: 6,
        borderWidth: 1,
        marginLeft: 155,
        marginTop: -12





    },
    circle3: {
        width: 6,
        height: 6,
        borderRadius: 3,
        borderWidth: 3,
        borderColor: '#00C458',
        marginLeft: 37,
        marginTop: -9



    },
    circle4: {
        width: 6,
        height: 6,
        borderRadius: 3,
        borderColor: '#00C458',
        borderWidth: 3,
        marginLeft: 158,
        marginTop: -6
    },

    txt2: {
        fontSize: 12,
        fontFamily: 'gilroy',
        color: '#00C458',
        marginTop: 8,

        marginLeft: 52,

    },
    txt3: {
        fontSize: 12,
        fontWeight: 'normal',
        color: '#00C458',
        marginLeft: 175,
        marginTop: -18,


    },
    container1: {
        width: 375,
        height: 628.23,
        backgroundColor: '#F9F9F9',
        marginTop: 55
    },
    box1: {
        width: 311,
        height: 115,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
        marginLeft: 52,
        marginTop: -25
    },
    txt4: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#002333',
        padding: 20
    },
    circle5: {
        width: 12,
        height: 12,
        backgroundColor: '#FFFFFF',
        borderColor: '#9F9F9F',
        borderWidth: 1,
        borderRadius: 6,
        marginLeft: 20,
        marginTop: -15

    },
    circle6: {
        width: 12,
        height: 12,
        backgroundColor: '#FFFFFF',
        borderColor: '#9F9F9F',
        borderWidth: 1,
        borderRadius: 6,
        marginLeft: 125,
        marginTop: -12
    },
    circle7: {
        width: 6,
        height: 6,
        borderRadius: 3,
        borderWidth: 3,
        borderColor: '#9F9F9F',
        marginLeft: 23,
        marginTop: -9


    },
    circle8: {
        width: 6,
        height: 6,
        borderRadius: 3,
        borderWidth: 3,
        borderColor: '#9F9F9F',
        marginLeft: 128,
        marginTop: -6


    },
    text5: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#9F9F9F',
        marginLeft: 38,
        marginTop: -7
    },
    text6: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#9F9F9F',
        marginLeft: 145,
        marginTop: -18

    },
    box2: {
        width: 311,
        height: 115,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
        marginLeft: -1,
        marginTop: 27

    },
    box3: {
        width: 311,
        height: 115,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
        marginLeft: -1,
        marginTop: 10
    }


})