
import './App.css';
import Login from './Login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Editor from './Editor/Editor';
import Code from "../Components/Code/Code"
import ProSection from './ProSection/ProSection';
import Context from './ContextFile/Context';
import Home from '../Home/Home';
import AboutUs from './AboutUs/AboutUs';
import SavedFiles from './SavedFiles/SavedFiles';


const App = () => {
  const AppRouter = createBrowserRouter([
    {
      path: '/',
      element: 
      <Login/>, // You can define a home element here
    },
    {
      path: '/code',
      element: <Code />,
    },
    {
      path:'/CodePalatte-Pro',
      element:<ProSection/>
    },
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/about',
      element:<AboutUs/>
    },
    {
      path:'/saved-files',
      element:<SavedFiles/>  
    },
  ]);

  // const [Html, setHtml] = useState('');
  // const [Css, setCss] = useState('');
  // const [JavaScript, setJavaScript] = useState('');

  return (
    // <DataContext.Provider value={{ Html, setHtml, Css, setCss, JavaScript, setJavaScript }}>
    //   <RouterProvider router={AppRouter} />
    // </DataContext.Provider>
    <Context> 
    <RouterProvider router={AppRouter} />
    </Context>
  );
};

export default App;
