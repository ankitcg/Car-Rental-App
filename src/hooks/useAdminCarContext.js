
import { useContext } from "react"; 
import { AdminCarContext } from "../context/AdminCarContext";

export const useAdminCarContext = () => {
    const context =  useContext(AdminCarContext)

    if(!context) {
        throw Error('CarContext must be used in CarContextProvider')
    }
    return context
}