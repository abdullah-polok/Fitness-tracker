import { useContext, useEffect } from 'react'
import { AuthContext } from '../Provider/AuthProvider';

const AdmitRoutes = ({ children }) => {
    const { user, loading, isAdmin, checkEmail, alluser, setallUser, adminmail } = useContext(AuthContext)


    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && (checkEmail.email === adminmail)) {
        return children;
    }

};

export default AdmitRoutes;