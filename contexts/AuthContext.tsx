import { createContext,useState} from "react";
import {setCookie} from 'nookies';
import Router from 'next/router';
import {signInRequest} from '@/lib/Login';
import axios from "axios";
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
	



	async function signIn(data){
		const token = await axios.post(`/api/login/`,data);//vericação do backend
		console.log(token)
				setCookie(undefined,'digitalmenu.token',token.data,{
			maxAge: 60*60*1, // 1 hour
		})
		console.log("AC")
		//setUser(user);
		//console.log(user)
		//console.log( token.data)
		//Router.push('/admin/dashboard');
	}
	return (
		<AuthContext.Provider value={{user, signIn,isAuthenTicated }}>
		{children}
		</AuthContext.Provider>

	)   
}