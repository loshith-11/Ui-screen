import React, { Component } from 'react'

import { View, StyleSheet, Image, Text } from 'react-native'


export default class sidebar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/lft.png')} style={styles.img1}></Image>
                <View>
                    <Image source={require('../assets/Menu2.png')} style={styles.menu}></Image>
                    <View style={styles.profileIcon}></View>

                </View>
                <Text style={styles.Txt}>Aaron Taylor</Text>
                <Text style={styles.Txt1}>ID: 1234</Text>
                <Image source={require('../assets/larw.png')} style={styles.arw}></Image>

                <View style={styles.gbox}></View>
                <Text style={styles.txt}>Exam corner</Text>
                <View style={styles.line}></View>

                <View style={styles.gbox1}></View>
                <Text style={styles.txt}>Subrscriptions</Text>
                <View style={styles.line}></View>

                <View style={styles.gbox1}></View>
                <Text style={styles.txt}>Analytics</Text>
                <View style={styles.line}></View>

                <View style={styles.gbox1}></View>
                <Text style={styles.txt}>Downloads</Text>
                <View style={styles.line}></View>

                <View style={styles.gbox1}></View>
                <Text style={styles.txt}>Notifications</Text>
                <View style={styles.line}></View>

                <View style={styles.gbox1}></View>
                <Text style={styles.txt}>Referrals</Text>
                <View style={styles.line}></View>

                <View style={styles.gbox1}></View>
                <Text style={styles.txt}>Share app</Text>
                <View style={styles.line}></View>

                <View style={styles.rbox}></View>
                <Text style={styles.rtxt}>Logout</Text>

                <View style={styles.lbox}>
                    <Text style={styles.lbt}>Enquire now</Text>

                </View>


                <View style={styles.contaniner1}>
                    <Image source={require('../assets/Log.png')} style={styles.img2}></Image>
                    <Text style={styles.txt2}>Goodmorning</Text>
                    <Text style={styles.txt3}>Aaron Taylor</Text>

                    <Image source={require('../assets/dsg.png')} style={styles.img4}></Image>
                    <Text style={styles.txt4}> Class</Text>
                    <Text style={styles.txt5}>Plus two science</Text>
                    <View style={styles.box2}>
                        <View style={styles.circle2}></View>
                        <Text style={styles.txt6}>Biology</Text>
                    </View>
                    <Text style={styles.txt7}>Recent courses</Text>
                    <View style={styles.box6}>
                        <Image source={require('../assets/ply1.png')} style={styles.img6}></Image>
                        <Text style={styles.txt8}>Course Title</Text>
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.box8}>
                        <View style={styles.circle3}></View>
                        <Text style={styles.txt9}>Target live classes</Text>
                        <Text style={styles.txt10}>Live classes by best{'\n'} teachers from LearningHub to clear your doubts and to provide individual attention</Text>
                    </View>

                </View>










            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#002333'
    },
    img1: {
        width: 363.43,
        height: 281.43,
        marginTop: -60,
        marginLeft: -175


    },
    contaniner1: {
        width: 338,
        height: 732,
        borderRadius: 16,
        borderColor: '#0000007A',
        backgroundColor: 'white',
        marginLeft: 260,
        marginTop: -750


    },
    img2: {
        width: 116,
        height: 26,
        marginLeft: 80,
        marginTop: 50


    },
    txt2: {
        fontSize: 10,
        fontWeight: 'normal',
        marginLeft: 58,
        marginTop: 15,
        color: '#002333'
    },
    txt3: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#002333',
        marginLeft: 52,
        marginTop: -5


    },

    txt4: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4D4D4D',
        marginTop: -55,
        marginLeft: 82
    },
    txt5: {
        fontSize: 14,
        fontWeight: '900',
        color: '#FFFFFF',
        marginLeft: 85

    },
    img4: {
        width: 311,
        height: 64,
        marginLeft: 57,
        marginTop: 30



    },

    box2: {
        width: 92,
        height: 39,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#002333',
        marginLeft: 57,
        marginTop: 45

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
    txt7: {
        fontSize: 12,
        fontWeight: '700',
        color: '#002333',
        marginLeft: 58,
        marginTop: 24
    },
    box6: {
        width: 213,
        height: 121,
        marginLeft: 58,
        backgroundColor: '#CFCFCF',
        marginTop: 5
    },
    img6: {
        width: 24,
        height: 24,
        marginLeft: 10,
        marginTop: 72

    },
    line: {
        width: 25,
        height: 2,
        backgroundColor: '#3F57CE',
        marginLeft: 5,
        marginTop: 5
    },
    txt8: {
        fontSize: 12,
        fontWeight: '500',
        color: '#FFFFFF',
        marginLeft: 42,
        marginTop: -20

    },
    box8: {
        width: 235,
        height: 310,
        backgroundColor: '#002333',
        borderRadius: 8,
        marginLeft: 58,
        marginTop: 15


    },
    circle3: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#002E43',
        marginTop: 20,
        marginLeft: 32
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
    menu: {
        width: 32,
        height: 32,
        marginLeft: 32,
        marginTop: -195



    },
    profileIcon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#00C458',
        marginLeft: 32,
        marginTop: 40

    },
    Txt: {
        fontSize: 14,
        fontWeight: '700',
        color: '#FFFFFF',
        marginLeft: 110,
        marginTop: -105



    },



    Txt1: {
        fontSize: 12,
        fontWeight: '200',
        color: '#6A828E',
        marginLeft: 110,


    },
    arw: {
        width: 6.36,
        height: 9.9,
        marginLeft: 218.59,
        marginTop: -25
    },
    gbox: {
        width: 30,
        height: 30,
        borderColor: '#00C458',
        borderWidth: 1,
        borderRadius: 4,
        marginLeft: 32,
        marginTop: 55
    },
    txt: {
        fontSize: 14,
        color: '#FFFFFF',
        marginLeft: 78,
        marginTop: -25,
        fontWeight: '100'
    },
    line: {
        width: 193,
        height: 1,
        borderColor: '#243C47',
        borderRadius: 2,
        marginLeft: 32,
        borderWidth: 1,
        marginTop: 25
    },
    gbox1: {
        width: 30,
        height: 30,
        borderColor: '#00C458',
        borderWidth: 1,
        borderRadius: 4,
        marginLeft: 32,
        marginTop: 15,


    },
    rbox: {
        width: 30,
        height: 30,
        borderColor: '#E14949',
        borderWidth: 1,
        borderRadius: 4,
        marginLeft: 32,
        marginTop: 15
    },
    rtxt: {
        fontSize: 14,
        color: '#E14949',
        marginLeft: 78,
        marginTop: -25,
        fontWeight: '100'
    },
    lbox: {
        width: 193,
        height: 47,
        borderWidth: 1,
        borderColor: '#00C458',
        borderRadius: 4,
        marginTop: 40,
        marginLeft: 32

    },
    lbt: {
        fontSize: 12,
        fontWeight: '500',
        color: '#00C458',
        marginLeft: 63,
        marginTop: 16
    }






})