import { Outlet } from 'react-router-dom';
import useAdmin from '../CustomHooks/useAdmin';

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    console.log("🚀 ~ file: Dashboard.jsx:6 ~ Dashboard ~ isAdmin:", isAdmin)
    return ( 
        <Outlet></Outlet>
     );
}
 
export default Dashboard;