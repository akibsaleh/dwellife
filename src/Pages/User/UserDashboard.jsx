import { useContext } from 'react';
import { AuthContext } from '../../Providers/Provider';

const UserDashboard = () => {
    const {user} = useContext(AuthContext);
    return ( 
        <div className='w-full flex flex-col justify-center items-center h-full grow prose lg:prose-lg'>
            <h1 className='!my-0 pb-10'>Welcome, {user?.displayName}</h1>
        </div>
     );
}
 
export default UserDashboard;