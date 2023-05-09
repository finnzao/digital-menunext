import { createContext,useState} from "react";
import {setCookie} from 'nookies';
import Router from 'next/router';
import {signInRequest} from '@/lib/Login';
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
	
	async function signIn({email,password}){
		console.log('abc')
		const {token} = await axios.post(`/api/login/`,
		{email,password});//vericação do backend
		console.log(token)
		setCookie(undefined,'digitalmenu.token',{
			maxAge: 60*60*1, // 1 hour
		})

		setUser(user);
		console.log(user)
		Router.push('/admin/dashboard');
	}
	return (
		<AuthContext.Provider value={{ signIn,isAuthenTicated }}>
		{children}
		</AuthContext.Provider>

	)
}