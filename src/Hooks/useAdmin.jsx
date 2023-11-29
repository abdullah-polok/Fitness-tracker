import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from 'react'
// import { useQuery } from "@tanstack/react-query";
const useAdmin = () => {
    const { user, checkEmail, isAdmin, setIsAdmin } = useContext(AuthContext)


};

export default useAdmin;