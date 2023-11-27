import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import DashboardDrawer from '../Components/DashboardDrawer';
import { ToastContainer } from 'react-toastify';

const Dashboard = () => {
  return (
    <>
      <main className="w-full flex relative">
        <aside className="h-full grow">
          <DashboardDrawer />
        </aside>
        <section className="w-full min-h-screen flex flex-col">
          <Header></Header>
          <section className="w-full max-w-1440 mx-auto h-full grow flex flex-col items-center">
            <Outlet></Outlet>
          </section>
          <Footer></Footer>
        </section>
      </main>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Dashboard;
