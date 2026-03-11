/* API LAYER WHERE API HANDLE FRONTEND WITH BACKEND */
/* connection with API's present in auth.routes.js */
/* npm i axios */

import axios from "axios"

const api=axios.create({
    baseURL:"http://localhost:3000",   //base url for all the API's in this file. it will be used in all the API's in this file
    withCredentials:true        // helps to send the cookie to the server and receive the cookie from the server. it is used for authentication in future
})

/* rgister  API */

export async function register(username,email,password){
    try{
         const response=await api.post('/api/auth/register',{  // axios.post=>Sends an HTTP POST request to the server..username.,email,pass
            username,email,password     //actually process is axios.post('hettps://localhost:3000/api/auth/register',)=>but to short the code , first we mention the common part, then just use api.post instead of axios.post The server will receive this data and process it according to the logic defined in the corresponding route handler (in this case, the registerUserController). The server will then send a response back to the client, which can be accessed through response.data.
         })
         return response.data
    }catch(err){
        console.log(err)
    }
   
}

/* login  API */
export async function login(email,password){
     
    try{
        const response=await api.post('/api/auth/login',{  // axios.post=>Sends an HTTP POST request to the server..email,pass
           email,password
        })
        return response.data

    }catch(rr){
        console.log(err)
    }
}

/* logout  API */
export async function logout(){
    try{
        const response=await api.get('/api/auth/logout')
        return response.data

    }catch(err){
        console.log(err)
    }
}

/* getMe  API */
export async function getMe(){
    try{
        const response=await axios.get('/api/auth/get-me',{  // axios.get=>tlls servr to check the token in cookie and get the user details from token and pass it to controller in req.user
        })
        return response.data        
    }catch(err){
        console.log(err)
    }   
}