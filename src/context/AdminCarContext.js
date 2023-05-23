import { createContext, useReducer } from "react";



export const AdminCarContext = createContext()

export const AdminCarReducer = (state, action) => {
      switch (action.type) {
        case 'SET_ADMIN_CAR' : {
            return {
            cars : action.payload 
            }
        }
        case 'CREATE_ADMIN_CAR' : {
            return {
                cars: [action.payload, ...state.cars]
            }
        }
       
        default :
        return state
      }
}
  
export const AdminCarContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AdminCarReducer , {  
        cars : null
    }) 
    
     return ( 
        
        <AdminCarContext.Provider value={{...state , dispatch}}>  
           { children }    
        </AdminCarContext.Provider>
     )
}
//yha children app.js file h