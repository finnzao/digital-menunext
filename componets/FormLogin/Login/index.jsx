import { useState } from 'react';
import { loginFields } from "../constants/formFields";
import Input from "../Input";
import styles from "./style.module.css"
import {AuthContext} from "@/contexts/AuthContext"
import {useContext} from 'react';


const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);
    const {signIn}= useContext(AuthContext)
    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSignIn= async(e) =>{
        e.preventDefault()
        await signIn(loginState)

    }
    return(
        <form className={styles.container} onSubmit={()=>handleSignIn}>
        <div >
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>

        <button className={styles.button}>Confirmar</button>

      </form>
    )
}