
import React from 'react'
import {View, Image, Text, SafeAreaView, StyleSheet, Dimensions, ScrollView} from 'react-native'

const MenuView = props => {
    return(
        <SafeAreaView>
            <View style={styles.textContainer}>
               <Image
                style= {styles.image}
                source= {{ uri: props.RestImage }} 
                resizeMode= 'stretch'
                />
                <View style={styles.container}>
                    <View style= {styles.textContainer}>                            
                        <View style ={{flexDirection:'row'}}>
                            <Text style= {styles.text}>{props.RestName}</Text>
                            {props.RestHot && 
                            <Image 
                                style={styles.fire} 
                                source={require("../assets/fire.png")}
                            />}
                        </View>
                        <Text style= {styles.RestLoc}>{props.RestLoc}</Text>   
                    </View>  
                    <View style={styles.textContainer}>
                    <View style={{flexDirection:'row'}}>
                        <Image 
                            resizeMode='stretch' 
                            style = {styles.heart} 
                            source={require('../assets/heart.png')}
                        />
                        <Text style = {styles.restLikes}>{props.RestLike}</Text>
                    </View>
                </View> 
                    
                </View>
                
            </View>   
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#006064',
        margin: 5,
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    textContainer: {
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    footerLikes: {
        justifyContent: 'flex-end',
        margin: 10,
        flexDirection: 'column',
        alignItems: 'center',
    },

    image: { 
        borderRadius: 10,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 3,
    },
    text: {
        color: 'white',  
        fontSize: 20,
        fontWeight:'bold',
        marginLeft:10,
        marginTop:10,
        marginRight:5,  
    },
    fire: {
        marginTop:15,
        height:15,
        width:15,
      },
    heart: {
        marginTop:5,
        height:20,
        width:20,
    },
    restLikes:{
        fontSize:12,
        margin:5,
        color: 'white',
        
    },
    RestLoc:{
        alignItems: 'center',
        marginLeft:10,
        marginBottom:10,
        marginTop:5,
        fontSize:10,
        color:'#cb9b8c'
    },
  });
export {MenuView};  