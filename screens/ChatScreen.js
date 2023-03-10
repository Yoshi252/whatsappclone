import React, { useCallback, useState } from 'react'
import { View, StyleSheet, ImageBackground, Button, TextInput, SafeAreaView, TouchableOpacity, Platform } from 'react-native'
import backgroundImage from "../assets/images/droplet.jpeg"
import { Feather } from '@expo/vector-icons';
import colors from '../constants/colors';
import { KeyboardAvoidingView } from 'react-native';


const ChatScreen = props => {

    const [messageText, setMessageText] = useState("");
    console.log(props);

    const sendMessage = useCallback(() => {
        setMessageText("")
    }, [messageText])

    return (
        <SafeAreaView 
            style={styles.container}
            edges={['right', 'left', 'bottom']}
        >
            <KeyboardAvoidingView
                style={styles.screen}
                behavior={ Platform.OS === "ios" ? "padding" : undefined}
                keyboardVerticalOffset={100}
            >
                <ImageBackground 
                    source={backgroundImage} 
                    style={styles.backgroundImage}
                >

                </ImageBackground>
                <View style={styles.inputContainer}>
                    <TouchableOpacity 
                        style={styles.mediaButton}
                        onPress={() => console.log("pressed")}
                    >
                        <Feather name="plus" size={24} color={colors.blue} />
                    </TouchableOpacity>

                    <TextInput 
                        style={styles.textBox}
                        // We do this so in the future we can update the textbox, & it will stay if there is an error
                        value={messageText}
                        onChangeText={text => setMessageText(text)}
                        // Now when you press submit on your keyboard, the message should send as well
                        onSubmitEditing={sendMessage}
                    />
                    {
                        messageText === "" && 
                        <TouchableOpacity 
                            style={styles.mediaButton}
                            onPress={() => console.log("pressed")}
                        >
                            <Feather name="camera" size={24} color="black" />
                        </TouchableOpacity>
                    }
                    {
                        messageText !== "" && 
                        <TouchableOpacity 
                        style={{...styles.mediaButton, ...styles.sendButton}}
                            onPress={sendMessage}
                        >
                            <Feather name="send" size={20} color="white" />
                        </TouchableOpacity>
                    }
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    screen: {
        flex: 1
    },
    backgroundImage: {
        flex: 1
    },
    inputContainer: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 10,
        height: 50
    },
    textBox:{
        flex: 1,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: colors.lightGrey,
        marginHorizontal: 15,
        paddingHorizontal: 12
    },
    mediaButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,
    },
    sendButton: {
        backgroundColor: colors.blue,
        borderRadius: 50,
        padding: 8,
    }
})
