import { createContext,useState,useEffect} from "react";
import {setCookie,parseCookies} from 'nookies';
import Router from 'next/router';
import axios from "axios";
import {signInRequest} from '../lib/Login.js';
import { api } from "../services/api";
type User={
	email:string,
}
type SignIndata = {
	email:string;
	password:string;
}

type AuthContextType={
	isAuthenTicated:boolean;
	user:User;
	signIn:(data:SignIndata)=>Promise<void>
}

export const AuthContext = createContext({} as AuthContextType )

export function AuthProvider({children}){
	const [user,setUser]=useState<User | null>(null)
	const isAuthenTicated= !!user;
	
	useEffect(()=>{
		const{ 'digitalmenu.token':token }=parseCookies()

	},[])


	async function signIn(data: SignIndata){
			const token = await axios.post(`/api/login/`,data);//vericação do backend	
			setCookie(undefined,'digitalmenu.token',token.data,{
				maxAge: 60*60*1, // 1 hour
			})
			api.defaults.headers['Authorization'] = `Bearer ${token}`;
			Router.push('/admin/dashboard');

	}
	return (
		<AuthContext.Provider value={{user, signIn,isAuthenTicated }}>
		{children}
		</AuthContext.Provider>

	)   
}