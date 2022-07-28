import React, { Component } from 'react'

import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native'


export default class Settings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/lft.png')} style={styles.img1}></Image>
                <Text style={styles.Txt1}>Profile</Text>
                <Image source={require('../assets/bell.png')} style={styles.img2}></Image>
                <Image source={require('../assets/Menu.png')} style={styles.img3}></Image>

                <View style={styles.container2}>
                    <View style={styles.profileicon}></View>
                    <Text style={styles.txt2}>Jane Doe</Text>
                    <Text style={styles.txt3}>ID: 12345678</Text>
                    <Text style={styles.txt4}>Personal Info</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.txt5}>Account Settings</Text>
                    <Text style={styles.txt6}>Aaron Taylor</Text>
                    <View style={styles.line1}></View>
                    <Text style={styles.txt5}>Email</Text>
                    <Text style={styles.txt6}>emaidid123@server.com</Text>
                    <View style={styles.line1}></View>
                    <Text style={styles.txt5}>Number</Text>
                    <Text style={styles.txt6}>+91 9876543210</Text>
                    <View style={styles.line1}></View>
                    <Text style={styles.txt4}>Course Info</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.txt5}>Center</Text>
                    <Text style={styles.txt6}>Inmakes edu</Text>
                    <View style={styles.line1}></View>
                    <Text style={styles.txt5}>Course</Text>
                    <Text style={styles.txt6}>Plus Two Science</Text>
                    <View style={styles.line1}></View>
                    <Text style={styles.txt5}>Payment Status</Text>
                    <Text style={styles.txt6}>Free</Text>
                    <View style={styles.line1}></View>
                    <Text style={styles.txt5}>Expiry Date</Text>
                    <Text style={styles.txt6}>Not Applicable</Text>

                </View>
                <View style={styles.box1}>
                    <TouchableHighlight style={styles.button}>
                        <Image source={require('../assets/pay.png')} style={styles.img4}>

                        </Image>
                    </TouchableHighlight>
                    <Text style={styles.txt7}>Custom Payment</Text>
                    <Image source={require('../assets/darw.png')} style={styles.img5}></Image>

                </View>
                <View style={styles.box2}></View>
                <View style={styles.box3}>
                    <Image source={require('../assets/hom.png')} style={styles.img6}></Image>
                    <Text style={styles.txt8}>Home</Text>
                    <Image source={require('../assets/ply2.png')} style={styles.img7}></Image>
                    <Text style={styles.txt9}>Recent</Text>
                    <Image source={require('../assets/img1.png')} style={styles.img8}></Image>
                    <Text style={styles.txt10}>Exams</Text>
                    <Image source={require('../assets/gpro.png')} style={styles.img9}></Image>
                    <Image source={require('../assets/dot.png')} style={styles.img11}></Image>
                    <Image source={require('../assets/msg.png')} style={styles.img10}></Image>
                    <Text style={styles.txt11}>Contact</Text>

                </View>


            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 415,
        height: 290,
        backgroundColor: '#00202F',


    },
    img1: {
        width: 170,
        height: 270,
        marginLeft: -95,
        marginTop: -55

    },
    Txt1: {
        fontSize: 20,
        fontWeight: '100',
        color: '#FFFFFF',
        marginLeft: 165,
        marginTop: -200


    },
    img2: {
        width: 14,
        height: 18,
        marginLeft: 286,
        marginTop: -23


    },
    img3: {
        width: 32,
        height: 32,
        marginLeft: 330,
        marginTop: -25
    },
    container2: {
        width: 380,
        height: 581,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#EEEEEE',
        borderRadius: 10,
        marginLeft: 15,
        marginTop: 40
    },
    profileicon: {
        width: 50,
        height: 50,
        backgroundColor: '#EEEEEE',
        borderWidth: 2,
        borderColor: '#19BD9B',
        borderRadius: 25,
        marginLeft: 16,
        marginTop: 16
    },
    txt2: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4D4D4D',
        marginTop: -45,
        marginLeft: 75
    },
    txt3: {
        fontSize: 10,
        fontWeight: '300',
        color: '#4D4D4D',
        marginTop: 2,
        marginLeft: 75
    },
    txt4: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4D4D4D',
        marginTop: 24,
        marginLeft: 16
    },
    line: {
        width: 378,
        height: 2,
        backgroundColor: '#EEEEEE',
        marginTop: 17

    },
    txt5: {
        fontSize: 14,
        fontWeight: '200',
        color: '#4D4D4D',
        marginTop: 17,
        marginLeft: 16
    },
    line1: {
        width: 338,
        height: 2,
        backgroundColor: '#EEEEEE',
        marginTop: 17,
        marginLeft: 16

    },
    txt6: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4D4D4D',
        marginLeft: 185,
        marginTop: -22

    },
    box1: {
        width: 380,
        height: 68,
        backgroundColor: '#00C458',
        borderRadius: 8,
        marginLeft: 17,
        marginTop: 5

    },
    button: {
        width: 36,
        height: 36,
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        marginLeft: 16,
        marginTop: 16,
        opacity: .5
    },
    img4: {
        width: 16,
        height: 12,
        marginTop: 10,
        marginLeft: 10
    },
    txt7: {
        fontSize: 12,
        fontWeight: '400',
        color: '#FFFFFF',
        marginLeft: 64,
        marginTop: -25
    },
    img5: {
        width: 15,
        height: 10,
        marginLeft: 306,
        transform: [{ rotate: '-90deg' }],
        marginTop: -15
    },
    box2: {
        width: 350,
        height: 68,
        backgroundColor: '#00C458',
        borderRadius: 8,
        marginLeft: 32,
        marginTop: 5
    },
    box3: {
        width: 390,
        height: 70,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        marginTop: -75,
        marginLeft: 12,
        shadowColor: '#00000014'
    },
    img6: {
        width: 17,
        height: 17,
        marginLeft: 20,
        marginTop: 20
    },
    txt8: {
        fontSize: 8,
        fontWeight: '600',
        color: '#C2C2C2',
        marginLeft: 41,
        marginTop: -15
    },
    img7: {
        width: 17,
        height: 17,
        marginLeft: 83,
        marginTop: -15
    },
    img8: {
        width: 16,
        height: 18,
        marginLeft: 150,
        marginTop: -15
    },
    img9: {
        width: 18,
        height: 17,
        marginLeft: 222,
        margin: -25
    },
    img10: {
        width: 25,
        height: 20,
        marginLeft: 269,
        marginTop: -23
    },
    txt9: {
        fontSize: 8,
        fontWeight: '600',
        color: '#C2C2C2',
        marginLeft: 104,
        marginTop: -14

    },
    txt10: {
        fontSize: 8,
        fontWeight: '600',
        color: '#C2C2C2',
        marginLeft: 170,
        marginTop: -15

    },
    txt11: {
        fontSize: 8,
        fontWeight: '600',
        color: '#C2C2C2',
        marginLeft: 299,
        marginTop: -15

    },
    img11: {
        width: 4,
        height: 4,
        marginLeft: 229,
        marginTop: 34
    }





})

