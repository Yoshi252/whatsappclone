import { View, StyleSheet, Text, TextInput } from "react-native"
import colors from "../constants/colors";
import { FontAwesome } from '@expo/vector-icons';

const Input = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>

            <View style={styles.inputContainer}>
                {
                    props.icon && <props.iconPack 
                        style={styles.icon} 
                        // if the user specifies an icon size, use it. If not it will be 15
                        name={props.icon || 15}
                        size={props.iconSize} 
                    />
                }
                <TextInput style={styles.input} />
            </View>

            {
                props.errorText &&
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}> 
                        {props.errorText}
                    </Text>
                </View>
            }
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    inputContainer: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 2,
        backgroundColor: colors.nealyWhite,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginRight: 10,
        color: colors.grey
    },
    label: { 
        marginVertical: 8,
        fontFamily: 'bold',
        letterSpacing: 0.3,
        color: colors.textColor
    },
    input: {
        color: colors.textColor,
        flex: 1,
        fontFamily: 'regular',
        letterSpacing: 0.3,
        paddingTop: 0
    },
    errorContainer:{
        marginVertical: 5
    },
    errorText:{
        color: 'red',
        fontSize: 13,
        fontFamily: 'regular',
        letterSpacing: 0.3
    }
})