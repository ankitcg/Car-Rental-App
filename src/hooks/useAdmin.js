import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

export const useAdmin = () => {
    const [error, setError] = useState(null)
    const [isloading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()

    const admin = async (email, password) => {
        setIsLoading(true)
        setError(null)



        if(email === 'admin@gmail.com' && password === '@admin123'){
        const response = await fetch('/api/v1/admin/login', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({email, password})
        })
        const json = await response.json();

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            //save the user in localstorage
            localStorage.setItem('user', JSON.stringify(json))
            navigate('/admin')
            //update the auth context
            dispatch({type: 'LOGIN', payload : json})

            setIsLoading(false)
            
        }
    }
    else{
        setError('You are not admin')
    }
    }

    return {admin, isloading, error}
}