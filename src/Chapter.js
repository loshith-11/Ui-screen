import React,{Component} from 'react'
 import { View,StyleSheet ,Image ,Text,TouchableHighlight} from 'react-native'
import { color } from 'react-native-reanimated'

 export default class Chapter extends Component{
     render(){
         return(
             <View style={styles.container}>
                 <Image source={require('../assets/Menu3.png')} style={styles.img1}></Image>
                 <Text style={styles.txt1}>Biology</Text>
                 <Image source={require('../assets/img.png')} style={styles.Img2}></Image>
                 <Text style={styles.txt2}>Long chapter name can{'\n'}be shown here.</Text>
                 <View style={styles.circle1}></View>
                 <View style={styles.circle2}></View>
                 <Text style={styles.txt3}>Chapter 1</Text>
                 <View style={styles.circle3}></View>
                 <View style={styles.circle4}></View>
                 <Text style={styles.txt4}>3 Parts</Text>

                 <Text style={styles.txt5}>Video</Text>
                 <Text style={styles.txt6}> Chapter Test </Text>
                 <Text style={styles.txt7}> Resources</Text>
                 <Text style={styles.txt8}> QN Bank</Text>
                 
                  <View style={styles.line}></View>
                  <View style={styles.box1}>
                      <View style={styles.box2}>
                          <TouchableHighlight style={styles.button}>
                              <Text style={styles.buttontxt}>Biology</Text>
                          </TouchableHighlight>
                      </View>
                      <Text style={styles.txt9}>Long chapter name can be shown{'\n'}here.</Text>
                      <View styles={styles.circle5}></View>
                      <View styles={styles.circle6}></View>
                      <Text style={styles.txt10}>Chapter 1</Text>
                      <View style={styles.circle5}></View>
                      <View style={styles.circle6}></View>
                      <View style={styles.circle7}></View>
                      <View style={styles.circle8}></View>
                     
                      
                      <Text style={styles.txt11}>Part 1</Text>
                      
                    

                  </View>
                  <View style={styles.box1}>
                  <View style={styles.box2}>
                          <TouchableHighlight style={styles.button}>
                              <Text style={styles.buttontxt}>Biology</Text>
                          </TouchableHighlight>
                      </View>
                      <Text style={styles.txt9}>Long chapter name can be shown{'\n'}here.</Text>
                      


                  </View>

             </View>

         )
     }
 }

 const styles =StyleSheet.create({
     container:{
         width:415,
         height:290,
         backgroundColor:'#00202F'
     },
     img1:{
         width:32,
         height:32,
         marginLeft:32,
         marginTop:40
     },
     txt1:{
         fontSiz:20,
         fontWeight:'500',
         color:'#FFFFFF',
         marginLeft:165,
         marginTop:-25

         

     },
     Img2:{
         width:363.43,
         height:281.43,
         marginLeft:210,
         marginTop:-118

     },
     txt2:{
        fontSize:20,
        fontWeight:'bold',
        color:'#FFFFFF',
        marginLeft:32,
        marginTop:-119
        
     },
     circle1:{
        width: 12,
        height: 12,
        backgroundColor: '#00202F',
        borderColor: '#00C458',
        borderRadius: 6,
        borderWidth: 1,
        marginLeft:32,
        marginTop:15
       
     },
     circle2:{
        width: 6,
        height: 6,
        borderRadius: 3,
        borderWidth: 3,
        borderColor: '#00C458',
        marginLeft:35,
        marginTop:-9
     },
     txt3:{
         fontSize:10,
         color:'#00C458',
         marginLeft:55,
         marginTop:-11
     },
     circle3:{
        width: 12,
        height: 12,
        backgroundColor: '#00202F',
        borderColor: '#00C458',
        borderRadius: 6,
        borderWidth: 1,
        marginLeft:130,
        marginTop:-13
        
     },
     circle4:{
        width: 6,
        height: 6,
        borderRadius: 3,
        borderWidth: 3,
        borderColor: '#00C458',
        marginLeft:133,
        marginTop:-9
     },
     txt4:{
        fontSize:10,
        color:'#00C458',
        marginLeft:155,
        marginTop:-10

     },
     txt5:{
         fontSize:14,
         fontWeight:'200',
         color:'#FFFFFF',
         marginLeft:32,
         marginTop:48
     },
     txt6:{
         fontSize:14,
         fontWeight:'200',
         color:'#83A1AF',
         marginLeft:105,
         marginTop:-20
     },
     txt7:{
        fontSize:14,
         fontWeight:'200',
         color:'#83A1AF',
         marginLeft:225,
         marginTop:-20  
     },
     txt8:{
        fontSize:14,
        fontWeight:'200',
        color:'#83A1AF',
        marginLeft:325,
        marginTop:-20

     },
     line:{
         width:40,
         height:5,
         backgroundColor:'#00C458',
         marginLeft:32,
         marginTop:14
        

     },
     box1:{
         width:355,
         height:255,
         marginLeft:32,
         backgroundColor:'#FFFFFF',
         marginTop:30
     },
     box2:{
         width:355,
         height:155,
         backgroundColor:'#9F9F9F'

     },
     button:{
         width:50,
         height:21,
         backgroundColor:'#00C458',
         borderRadius:5,
         alignItems:'center',
         justifyContent:'center',
         marginLeft:285,
         marginTop:105

     },
     buttontxt:{
         fontSize:10,
         color:'#FFFFFF',

     },
     txt9:{
         fontSize:16,
         fontWeight:'bold',
         color:'#002333',
         marginLeft:16,
         marginTop:10
     },
     circle5:{
        width: 12,
        height: 12,
        backgroundColor: '#FFFFFF',
        borderColor: '#9F9F9F',
        borderRadius: 6,
        borderWidth: 1,
        marginLeft:10,
        marginTop:-12
    
       
     },
     circle6:{
        width: 6,
        height: 6,
        borderRadius: 3,
        borderWidth: 3,
        borderColor: '#9F9F9F',
        marginLeft:13,
        marginTop:-9

        
     },
     txt10:{
         fontSize:10,
         color:'#9F9F9F',
         marginLeft:30,
         marginTop:5
     },
     txt11:{
        fontSize:10,
        color:'#9F9F9F',
        marginLeft:125,
        marginTop:-10

     },
     circle7:{
        width: 12,
        height: 12,
        backgroundColor: '#FFFFFF',
        borderColor: '#9F9F9F',
        borderRadius: 6,
        borderWidth: 1,
        marginLeft:105,
        marginTop:-10
       
     },
     circle8:{
        width: 6,
        height: 6,
        borderRadius: 3,
        borderWidth: 3,
        borderColor: '#9F9F9F',
       marginLeft:108,
       marginTop:-9
     }

     
     
 })