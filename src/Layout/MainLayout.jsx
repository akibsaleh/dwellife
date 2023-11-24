import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
  return (
    <>
      {noHeaderFooter || <Header />}
      <main className={`flex flex-col items-center h-full grow prose lg:prose-xl ${ noHeaderFooter ? 'max-w-full' : 'max-w-1440'} w-full`}>
          <Outlet />
      </main>
      {noHeaderFooter || <Footer />}
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

export default MainLayout;
