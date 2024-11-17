import { useState, createContext } from 'react';
import './App.css';
import Login from './Login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Editor from './Editor/Editor';
import { Code } from '@mui/icons-material';
export const DataContext = createContext(null);

const App = () => {
  const AppRouter = createBrowserRouter([
    {
      path: '/',
      element: 
      <Login/>, // You can define a home element here
    },
    {
      path: '/login',
      element: <Login />,
    }
  ]);

  const [Html, setHtml] = useState('');
  const [Css, setCss] = useState('');
  const [JavaScript, setJavaScript] = useState('');

  return (
    <DataContext.Provider value={{ Html, setHtml, Css, setCss, JavaScript, setJavaScript }}>
      <RouterProvider router={AppRouter} />
    </DataContext.Provider>
  );
};

export default App;
