import React, { Component } from 'react'

import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/Menu.png')} style={styles.img1}></Image>
                <Image source={require('../assets/Log.png')} style={styles.img2}></Image>
                <Image source={require('../assets/img.png')} style={styles.img3}></Image>
                <View style={styles.box1}>
                    <Text style={styles.txt1}>Classes</Text>
                    <View style={styles.circle1}></View>
                </View>
                <Text style={styles.txt2}>Goodmorning</Text>
                <Text style={styles.txt3}>Aaron Taylor</Text>
                <View>
                    <Image source={require('../assets/dsg.png')} style={styles.img4}></Image>
                    <Text style={styles.txt4}> Class</Text>
                    <Text style={styles.txt5}>Plus two science</Text>
                    <Image source={require('../assets/darw.png')} style={styles.img5}></Image>
                    <View style={styles.box2}>
                        <View style={styles.circle2}></View>
                        <Text style={styles.txt6}>Biology</Text>
                    </View>
                    <View style={styles.box3}>
                        <View style={styles.circle2}></View>
                        <Text style={styles.txt6}>Physics</Text>
                    </View>
                    <View style={styles.box4}>
                        <View style={styles.circle2}></View>
                        <Text style={styles.txt6}>Chemistry</Text>
                    </View>
                    <View style={styles.box5}>
                        <View style={styles.circle2}></View>
                    </View>
                    <Text style={styles.txt7}>Recent courses</Text>
                    <View style={styles.box6}>
                        <Image source={require('../assets/ply1.png')} style={styles.img6}></Image>
                        <View style={styles.line}></View>
                        <Text style={styles.txt8}>Course Title</Text>
                    </View>
                    <View style={styles.box7}>
                        <Image source={require('../assets/ply1.png')} style={styles.img6}></Image>
                        <View style={styles.line1}></View>
                        <Text style={styles.txt8}>Course Title</Text>

                        <View style={styles.box8}>
                            <View style={styles.circle3}></View>
                            <Text style={styles.txt9}>Target live classes</Text>
                            <Text style={styles.txt10}>Live classes by best{'\n'} teachers from LearningHub to clear your doubts and to provide individual attention</Text>
                            <TouchableHighlight style={styles.button2}>
                                <Text style={styles.btntxt}>Book a free Class

                                </Text>
                            </TouchableHighlight>

                        </View>
                        <View style={styles.box9}>
                            <View style={styles.circle4}></View>
                            <Text style={styles.txt9}>Avail free online counselling session</Text>
                            <Text style={styles.txt10}>By LearningHub's career experts</Text>
                            <TouchableHighlight style={styles.button1}>
                                <Text style={styles.btntxt}>Schedule a call

                                </Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.box10}>
                            <Image source={require('../assets/sym.png')} style={styles.img7}></Image>
                            <Image source={require('../assets/dot.png')} style={styles.img8}></Image>
                            <Image source={require('../assets/ply2.png')} style={styles.img9}></Image>
                            <Text style={styles.txt11}>Recent</Text>
                            <Image source={require('../assets/img1.png')} style={styles.img10}></Image>
                            <Text style={styles.txt12}>Exams</Text>
                            <Image source={require('../assets/pro.png')} style={styles.img11}></Image>
                            <Text style={styles.txt13}> Profile</Text>
                            <Image source={require('../assets/msg.png')} style={styles.img12}></Image>
                            <Text style={styles.txt14} >Contact</Text>


                        </View>





                    </View>



                </View>


            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    img1: {
        width: 32,
        height: 32,
        marginTop: 40,
        marginLeft: 32

    },
    img2: {
        width: 116,
        height: 26,
        marginLeft: 80,
        marginTop: -24

    },
    img3: {
        width: 86,
        height: 126,
        marginLeft: 325,
        marginTop: -75,




    },
    box1: {
        width: 75,
        height: 32,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#00C458',
        marginLeft: 295,
        marginTop: -75




    },
    circle1: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#007345',
        marginTop: -15,
        marginLeft: 5
    },
    txt1: {
        fontSize: 10,
        fontWeight: 'normal',
        color: '#00C458',
        marginLeft: 28,
        marginTop: 8
    },
    txt2: {
        fontSize: 10,
        fontWeight: 'normal',
        marginLeft: 32,
        marginTop: 15,
        color: '#002333'
    },
    txt3: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#002333',
        marginLeft: 32,
        marginTop: -10


    },
    img4: {
        width: 311,
        height: 64,
        marginLeft: 32,
        marginTop: 30
    },
    txt4: {
        fontSize: 12,
        fontWeight: 'normal',
        color: '#BAC3C7',
        marginTop: -55,
        marginLeft: 64
    },
    txt5: {
        fontSize: 14,
        fontWeight: '900',
        color: '#FFFFFF',
        marginLeft: 64
    },
    img5: {
        width: 7,
        height: 3,
        marginLeft: 306,
        marginTop: -20
    },
    box2: {
        width: 92,
        height: 39,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#002333',
        marginLeft: 32,
        marginTop: 65

    },
    circle2: {
        width: 24,
        height: 24,
        backgroundColor: '#00C458',
        borderRadius: 12,
        marginLeft: 8,
        marginTop: 6
    },
    txt6: {
        fontSize: 12,
        fontWeight: '600',
        color: '#002333',
        marginLeft: 38,
        marginTop: -22
    },
    box3: {
        width: 92,
        height: 39,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#002333',
        marginLeft: 145,
        marginTop: -39
    },
    box4: {
        width: 110,
        height: 39,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#002333',
        marginLeft: 255,
        marginTop: -39
    },
    box5: {
        width: 92,
        height: 39,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#002333',
        marginLeft: 379,
        marginTop: -39
    },
    txt7: {
        fontSize: 12,
        fontWeight: '700',
        color: '#002333',
        marginLeft: 32,
        marginTop: 24
    },
    box6: {
        width: 213,
        height: 121,
        marginLeft: 32,
        backgroundColor: '#CFCFCF',
        marginTop: 8
    },
    box7: {
        width: 213,
        height: 121,
        marginLeft: 32,
        backgroundColor: '#CFCFCF',
        marginTop: -122,
        marginLeft: 262
    },
    img6: {
        width: 24,
        height: 24,
        marginLeft: 10,
        marginTop: 72

    },
    txt8: {
        fontSize: 12,
        fontWeight: '500',
        color: '#FFFFFF',
        marginLeft: 42,
        marginTop: -30

    },
    line: {
        width: 25,
        height: 2,
        backgroundColor: '#3F57CE',
        marginLeft: 10,
        marginTop: 8
    },
    line1: {
        width: 88,
        height: 2,
        backgroundColor: '#3F57CE',
        marginLeft: 10,
        marginTop: 8
    },
    box8: {
        width: 235,
        height: 310,
        backgroundColor: '#002333',
        borderRadius: 8,
        marginStart: -230,
        marginTop: 45


    },
    box9: {
        width: 235,
        height: 310,
        backgroundColor: '#002333',
        borderRadius: 8,
        marginLeft: 25,
        marginTop: -310




    },
    txt9: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginLeft: 32,
        marginTop: 12,

    },
    txt10: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#446270',
        marginLeft: 32,
        marginTop: 12

    },
    circle3: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#002E43',
        marginTop: 20,
        marginLeft: 32
    },
    circle4: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#002E43',
        marginTop: 20,
        marginLeft: 32
    },
    box10: {
        width: 350,
        height: 74,
        backgroundColor: '#FFFFFF',
        borderColor: '#EEEEEE',
        borderWidth: 1,
        borderRadius: 4,
        marginTop: -135,
        marginStart: -250
    },
    img7: {
        width: 15,
        height: 16.83,
        marginLeft: 26.92,
        marginTop: 15
    },
    img8: {
        width: 4,
        height: 4,
        marginLeft: 32,
        marginTop: 10
    },
    img9: {
        width: 20,
        height: 17,
        marginLeft: 73,
        marginTop: -20
    },
    txt11: {
        fontSize: 8,
        fontWeight: 'normal',
        color: '#C2C2C2',
        marginLeft: 94,
        marginTop: -15
    },
    img10: {
        width: 16,
        height: 18,
        marginLeft: 140,
        marginTop: -15

    },
    txt12: {
        fontSize: 8,
        fontWeight: 'normal',
        color: '#C2C2C2',
        marginLeft: 160,
        marginTop: -15



    },
    img11: {
        width: 18,
        height: 17,
        marginLeft: 204,
        marginTop: -15
    },
    txt13: {
        fontSize: 8,
        fontWeight: 'normal',
        color: '#C2C2C2',
        marginLeft: 226,
        marginTop: -15

    },
    img12: {
        width: 20,
        height: 16,
        marginLeft: 269,
        marginTop: -15
    },
    txt14: {
        fontSize: 8,
        fontWeight: 'normal',
        color: '#C2C2C2',
        marginLeft: 293,
        marginTop: -15
    },
    button1: {
        width: 145,
        height: 47,
        backgroundColor: '#00C458',
        borderRadius: 4,
        marginLeft: 60,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button2: {
        width: 145,
        height: 47,
        backgroundColor: '#00C458',
        borderRadius: 4,
        marginLeft: 32,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'

    },
    btntxt: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }







})
