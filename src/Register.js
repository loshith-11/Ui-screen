import React, { Component } from "react";

import { View, StyleSheet, Image, Text, TextInput, TouchableHighlight } from 'react-native'

export default class Register extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/Log.png')} style={styles.logo}></Image>
                <Text style={styles.fonttext}>Enter your mobile number</Text>
                <Text style={styles.fonttext1}>We will send you an OTP to verify</Text>
                <View style={styles.container1}>
                   <View style={styles.textinput}>
                    <Text style={styles.txt}>+91</Text>
                   </View>
                   <View style={styles.textinput1}>
                    <Text style={styles.txt1}>Mobile number</Text>
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
        width: '100%',
        height: '70%',
        backgroundColor: '#ffffff',



    },
    logo: {
        height: 55,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 250,
        marginStart: 120

    },
    fonttext: {

        fontFamily: 'Gilroy',
        fontWeight: 'Semibold',
        color: '#002333',
        fontSize: 20,
        marginLeft: 85,
        marginTop: 200


    },
    fonttext1: {
        fontFamily: 'Gilory-Regular',
        fontWeight: 'Regular',
        fontSize: 14,
        color: '#9F9F9F',
        marginLeft: 90,


    },
    container1: {
        width: '100%',
        height: '60%',
        backgroundColor: '#002333',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginTop:25

    },
    textinput: {
        width: '15%',
        height: 55,
        borderWidth: 1,
        borderColor: '#13394A',
        marginTop: 70,
        marginLeft:20,
        borderRadius: 5,
        paddingLeft: 20,
        backgroundColor:'#062E40',
    

    },
    txt:{
        fontSize:14,
        color:'#ffffff',
        marginTop:18,
        

        
    },
    textinput1: {
        width: '70%',
        height: 55,
        borderWidth: 1,
        borderColor: '#13394A',
        marginLeft: 100,
        marginVertical: -55,
        borderRadius: 5,
        backgroundColor:'#062E40'

    },
    txt1:{
        fontSize:14,
        color:'#446270',
        marginTop:18,
        marginLeft:16

    },
    buttonVeiw: {
        width: '85%',
        height: 55,
        backgroundColor: '#00C458',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 75,
        marginLeft: 25,
        borderRadius: 10


    },
    buttontext: {
        fontFamily: 'Gilory',
        fontWeight: 'SemiBold',
        fontSize: 14,
        color: '#FFFFFF',


    }

})   