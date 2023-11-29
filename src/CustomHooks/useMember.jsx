import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Providers/Provider';
import useAxiosSecure from './useAxiosSecure';

const useMember = () => {
    const { user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data: isMember, isPending: isMemberLoading} = useQuery({
        queryKey: [user?.email, 'isMember'],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure.get(`/api/users/member/${user?.email}`);
            return response.data.member;
        }
    });
    return [isMember, isMemberLoading];
}
 
export default useMember;