import { Outlet } from 'react-router-dom';
import useAdmin from '../CustomHooks/useAdmin';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import DashboardDrawer from '../Components/DashboardDrawer';

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    console.log("🚀 ~ file: Dashboard.jsx:6 ~ Dashboard ~ isAdmin:", isAdmin)
    return ( 
        <main className='w-full flex relative'>
            <aside className='h-full grow'>
                <DashboardDrawer />
            </aside>
            <section className='w-full min-h-screen flex flex-col'>
                <Header></Header>
                <section className='w-full max-w-1440 mx-auto h-full grow flex flex-col items-center'>
                    <Outlet></Outlet>
                </section>
                <Footer></Footer>
            </section>
        </main>
     );
}
 
export default Dashboard;