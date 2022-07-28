import React, { Component } from 'react'

import { View, StyleSheet, Image, Text, TextInput, TouchableHighlight } from 'react-native'

export default class School extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/Log.png')} style={styles.logo}></Image>
                <View style={styles.profilecontainer}>
                    <Image source={require('../assets/Icon.png')} style={styles.image}></Image>
                    <Text style={styles.text1}>Icon</Text>
                </View>
                <Text style={styles.text2}>Select you school board</Text>
                <View style={styles.container1}>
                    <View style={styles.input}>
                        <Text style={styles.txt1}>Select board</Text>
                        <Image source={require('../assets/dwn.png')} style={styles.img1}></Image>
                    </View>
                    <View style={styles.input1}>
                        <Text style={styles.txt1}>Select class</Text>
                        <Image source={require('../assets/dwn.png')} style={styles.img1}></Image>
                    </View>
                    <TouchableHighlight style={styles.buttonVeiw}>
                        <Text style={styles.buttontext}>Continue</Text>
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
    logo: {
        width: 169,
        height: 42,
        marginLeft: 123,
        marginTop: 48
    },
    profilecontainer: {
        width: 120,
        height: 120,
        backgroundColor: '#F9F9F9',
        borderRadius: 60,
        marginLeft: 135,
        marginTop: 127

    },
    image: {
        marginLeft: -9



    },
    text1: {
        fontSize: 12,
        color: '#000000',
        fontWeight: 'bold',
        marginTop: -80,
        marginLeft: 50
    },
    text2: {
        fontSize: 20,
        fontFamily: 'gilory',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#002333',
        marginTop: 130,
        marginLeft: 77


    },
    container1: {
        width: '100%',
        height: '55%',
        backgroundColor: '#002333',
        marginTop: 32,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    input: {
        width: '85%',
        height: 55,
        borderRadius: 5,
        backgroundColor: '#062E40',
        borderWidth: 1,
        borderColor: '#007345',
        marginTop: 32,
        marginLeft: 32,
        paddingLeft: 16

    },
    input1: {
        width: '85%',
        height: 55,
        borderRadius: 5,
        backgroundColor: '#062E40',
        borderWidth: 1,
        borderColor: '#13394A',
        marginLeft: 32,
        marginTop: 16,
        paddingLeft: 16
    },
    buttonVeiw: {
        width: '85%',
        height: 55,
        backgroundColor: '#00C458',
        marginTop: 40,
        marginLeft: 32,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5

    },
    buttontext: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    txt1:{
        fontSize:14,
        color:'#446270',
        marginLeft:16,
        marginTop:18
    },
    img1:{
        marginLeft:299,
        marginTop:-15
    }



})