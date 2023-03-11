import React from "react";
import Input from '../components/Input'
import SubmitButton from '../components/SubmitButton'
import { Feather, FontAwesome } from '@expo/vector-icons'

const SignUpForm = props => {
    return (
        <>
            <Input 
                    label="First name" 
                    icon={"user-o"} 
                    iconPack={FontAwesome}
                    errorText=""
                />
                <Input 
                    label="Last name" 
                    icon={"user-o"} 
                    iconPack={FontAwesome}
                    errorText=""
                />
                <Input 
                    label="Email" 
                    icon={"mail"} 
                    iconPack={Feather}
                    errorText=""
                />
                <Input 
                    label="Password" 
                    icon={"lock"} 
                    iconPack={Feather}
                    errorText=""
                />
                <SubmitButton 
                    title="Sign Up"
                    onPress={() => console.log("Button pressed")}
                    style={{ marginTop: 20 }}
                />
        </>
    )
}

export default SignUpForm;