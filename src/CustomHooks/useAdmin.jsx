import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Providers/Provider';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const response = await axiosSecure.get(`/api/users/admin/${user?.email}`);
            return response.data.admin;
        }
    });
    return [isAdmin, isAdminLoading];
}
 
export default useAdmin;