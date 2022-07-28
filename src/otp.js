import React, { Component } from 'react'

import { View, StyleSheet, Image, Text, TextInput, TouchableHighlight } from 'react-native'

export default class otp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/Log.png')} style={styles.logo}></Image>
                <View style={styles.profilecontainer}>
                    <Image source={require('../assets/Icon.png')}></Image>
                    <Text style={styles.Icontext}>Icon</Text>
                </View>
                <Text style={styles.text1}>Verification code</Text>
                <Text style={styles.text2}>Please type the verification code sent to</Text>
                <Text></Text>
                <View style={styles.container1}>
                    <TextInput style={styles.input1}></TextInput>
                    <TextInput style={styles.input2}></TextInput>
                    <TextInput style={styles.input3}></TextInput>
                    <TextInput style={styles.input4}></TextInput>
                    <TextInput style={styles.input5}></TextInput>
                    <TextInput style={styles.input6}></TextInput>
                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.buttontext}>Rsend OTP</Text>

                    </TouchableHighlight>
                    <Text style={styles.text3}>Resend after 28s</Text>
                    <Text style={styles.text4}>Contact Us</Text>
                    <Image source={require('../assets/call.png')} style={styles.callpic}></Image>

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
    logo: {
        height: 42,
        width: 169,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 48,
        marginLeft: 120


    },
    profilecontainer: {
        height: 125,
        width: 125,
        backgroundColor: '#F9F9F9',
        borderRadius: 75,
        marginLeft: 135,
        marginTop: 70,


    },
    Icontext: {
        fontSize: 15,
        fontFamily: 'gilory',
        fontWeight: 'Semibold',
        color: '#000000',
        marginTop: -85,
        marginLeft: 45



    },
    image: {
        marginTop: 1,
        marginStart: -20


    },
    text1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#002333',
        marginTop: 150,
        marginLeft: 115



    },
    text2: {
        fontSize: 14,
        fontWeight: 'Regular',
        color: '#9F9F9F',
        marginLeft: 60


    },
    container1: {
        width: '100%',
        height: '50%',
        backgroundColor: '#002333',
        marginTop: 55,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40


    },
    input1: {
        width: 45,
        height: 45,
        borderColor: '#062E40',
        borderWidth: 1,
        marginLeft: 60,
        marginTop: 32,
        borderRadius: 4,
        backgroundColor: '#062E40'

    },
    input2: {
        width: 45,
        height: 45,
        borderColor: '#062E40',
        borderWidth: 1,
        marginTop: -45,
        borderRadius: 4,
        marginLeft: 110,
        backgroundColor: '#062E40'

    },
    input3: {
        width: 45,
        height: 45,
        borderColor: '#062E40',
        borderWidth: 1,
        marginHorizontal: 95,
        marginTop: -45,
        borderRadius: 4,
        marginLeft: 160,
        backgroundColor: '#062E40'
    },
    input4: {
        width: 45,
        height: 45,
        borderColor: '#062E40',
        borderWidth: 1,
        borderRadius: 4,
        marginLeft: 210,
        marginTop: -45,
        backgroundColor: '#062E40'

    },
    input5: {
        width: 45,
        height: 45,
        borderColor: '#062E40',
        borderWidth: 1,
        borderRadius: 4,
        marginTop: -45,
        marginLeft: 260,
        backgroundColor: '#062E40'



    },
    input6: {
        width: 45,
        height: 45,
        borderColor: '#062E40',
        borderWidth: 1,
        borderRadius: 4,
        marginTop: -45,
        marginLeft: 310,
        backgroundColor: '#062E40'
    },
    button: {
        width: '85%',
        height: 55,
        backgroundColor: '#00C458',
        marginTop: 16,
        marginLeft: 32,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'



    },
    buttontext: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF',

    },
    text3: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#446270',
        marginLeft: 165,
        marginTop: 8,

    },
    text4: {
        fontSize: 14,
        fontFamily: 'gilroy',
        color: '#00C458',
        marginLeft: 180,
        marginTop: 32

    },
    callpic: {
        marginLeft: 160,
        marginTop: -20

    }




})