import React, { Component } from 'react';

import { View, StyleSheet, Image, Text, TextInput, TouchableHighlight } from 'react-native'

export default class Detail extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <Image source={require('../assets/Log.png')} style={styles.logo}></Image>
                <View style={styles.profilecontainer}>
            

                    <Image source={require('../assets/Icon.png')} style={styles.image}></Image>
                    <Text style={styles.Icontext}>Icon</Text>
                </View>



                <Text style={styles.text}>
                    Student details
                </Text>
                <View style={styles.container1}>
                    <View style={styles.Intext}>
                        <Text style={styles.txt}>Full name</Text>
                    </View>
                    <View style={styles.Intext1}><Text style={styles.txt}>Email</Text>
                    </View>
                    <View style={styles.Intext1}>
                        <Text style={styles.txt}>Select state</Text>
                        <Image source={require('../assets/dwn.png')} style={styles.txtimg}></Image>
                    </View>
                    <View style={styles.Intext1}>
                        <Text style={styles.txt}>Pin code</Text>
                    </View>
                    
                    
                    
                
        
                    <TouchableHighlight style={styles.buttonVeiw}>
                        <Text style={styles.buttonText}>Register</Text>

                    </TouchableHighlight>
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
        marginStart: -10


    },
    text: {
        fontWeight: 'bold',
        fontFamily: 'Gilory',
        fontSize: 20,
        color: '#002333',
        marginLeft: 125,
        marginTop: 35

    },

    container1: {
        width: '100%',
        height: '100%',
        backgroundColor: '#002333',
        marginTop: 15,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40

    },
    Intext: {
        width: 355,
        height: 55,
        borderRadius: 5,
        borderColor: '#007345',
        borderWidth: 2,
        marginTop: 50,
        marginLeft: 32,
        backgroundColor:'#062E40'
    },
    Intext1: {
        width: '85%',
        height: 55,
        borderRadius: 5,
        borderColor:'#062E40' ,
        backgroundColor:'#062E40',
        borderWidth: 2,
        marginTop: 20,
        marginLeft: 35

    },
    buttonVeiw: {
        width: '85%',
        height: 55,
        backgroundColor: '#00C458',
        marginTop: 25,
        marginLeft: 35,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'


    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#FFFFFF'

    },
    txt: {
        fontSize:14,
        color:'#446270',
        marginLeft:16,
        marginTop:18



    },
    txtimg:{
        marginLeft:299,
        marginTop:-15,
        
    }

}) 