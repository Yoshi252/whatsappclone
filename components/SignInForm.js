import React from "react";
import Input from '../components/Input'
import SubmitButton from '../components/SubmitButton'
import { Feather } from '@expo/vector-icons'

const SignInForm = props => {
    return (
        <>
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
                title="Sign in"
                onPress={() => console.log("Button pressed")}
                style={{ marginTop: 20 }}
            />
        </>
    )
}

export default SignInForm;