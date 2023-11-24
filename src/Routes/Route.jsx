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
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Register />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            path: '/dashboard/user-dashboard',
            element: <UserDashboard />,
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
    ],
  },
]);
