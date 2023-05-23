import { createContext, useReducer } from "react";



export const CarContext = createContext()

export const carReducer = (state, action) => {
      switch (action.type) {
        case 'SET_CAR' : {
            return {
            cars : action.payload 
            }
        }
        case 'CREATE_CAR' : {
            return {
                cars: [action.payload, ...state.workouts]
            }
        }
       
        default :
        return state
      }
}
  
export const CarContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(carReducer , {  
        cars : null
    }) 
    
     return ( 
        
        <CarContext.Provider value={{...state , dispatch}}>  
           { children }    
        </CarContext.Provider>
     )
}
//yha children app.js file h