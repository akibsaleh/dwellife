import { useContext } from 'react';
import { AuthContext } from '../../Providers/Provider';

const UserDashboard = () => {
    const {user} = useContext(AuthContext);
    return ( 
        <div className='max-w-1440 mx-auto items-center justify-center'>
            <h1>Welcome, {user?.displayName}</h1>
        </div>
     );
}
 
export default UserDashboard;