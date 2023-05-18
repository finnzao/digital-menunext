import { useState } from 'react';
import { loginFields } from '../constants/formFields';
import {useForm} from 'react-hook-form'
import Input from '../Input';
import styles from './style.module.css'
import {AuthContext} from '@/contexts/AuthContext';
import {useContext} from 'react';
import axios from "axios";


const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const {handleSubmit} = useForm()
    const [loginState,setLoginState]=useState(fieldsState);
    const [errorMsg,setErrorMsg]=useState("")
    const {signIn}= useContext(AuthContext)
    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSignIn= async() =>{
        try{
        signIn(loginState)
        //const response = await axios.post("/api/login/",loginState);//vericação do backend
        //console.log(loginState)
        setErrorMsg("")
        }catch (err){
            console.log(err)
            setErrorMsg(err.message)
        }
               
        
    }

    return(
        <form className={styles.container} onSubmit={handleSubmit(handleSignIn)}>
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
                            //isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>
        <div className={styles.errorMsg}>{errorMsg}</div>
        <button className={styles.button}>Confirmar</button>

      </form>
    )
}