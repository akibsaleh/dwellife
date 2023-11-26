import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import PrivateRoutes from './PrivateRoutes';
import Dashboard from '../Pages/Dashboard';
import UserDashboard from '../Pages/User/UserDashboard';
import AllUsers from '../Pages/Admin/AllUsers';
import AdminRoutes from './AdminRoutes';
import Apartments from '../Pages/Apartments';
import MyProfile from '../Pages/User/MyProfile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/apartments',
        element: <Apartments />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Register />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard/user',
        element: <PrivateRoutes><UserDashboard /></PrivateRoutes>,
      },
      {
        path: '/dashboard/member',
        element: <PrivateRoutes><UserDashboard /></PrivateRoutes>,
      },
      {
        path: '/dashboard/admin',
        element: <PrivateRoutes><UserDashboard /></PrivateRoutes>,
      },
      {
        path: '/dashboard/my-profile',
        element: <PrivateRoutes><MyProfile /></PrivateRoutes>
      },
      {
        path: '/dashboard/allusers',
        element: (
          <AdminRoutes>
            <AllUsers />
          </AdminRoutes>
        ),
      },
    ],
  },
]);
