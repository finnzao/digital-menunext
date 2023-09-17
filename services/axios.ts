import { parseCookies } from "nookies";
import axios from "axios";

export function getAPIClient(ctx?:any){

const { 'digitalmenu.token':token} = parseCookies(ctx);

 const api = axios.create({
	baseURL: 'http://localhost:3000/api'
});

api.interceptors.request.use(config=>{
	return config
})
if (token){
	api.defaults.headers['Authorization'] = `Bearer ${token}`;
}
    return api
}