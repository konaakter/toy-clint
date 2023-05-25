import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registatoin from "../Pages/Registatoin/Registatoin";
import Addtoy from "../Pages/Addtoy/Addtoy";
import MyToy from "../Pages/MyToy/MyToy";
import Alltoys from "../Pages/Alltoys/Alltoys";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Veiwsdetails from "../Pages/Veiwsdetails/Veiwsdetails";
import Updatetoy from "../Pages/MyToy/Updatetoy";
import Eroorpage from "../Eroorpage/Eroorpage";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement : <Eroorpage></Eroorpage>,
        
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/registatoin",
                element: <Registatoin></Registatoin>,
            },
            {
                path: "/addtoy",
                element: <PrivateRouter><Addtoy></Addtoy></PrivateRouter>,
            },
            {
                path: "/mytoy",
                element: <PrivateRouter><MyToy></MyToy></PrivateRouter>,
            },
            {
                path: "/alltoy",
                element: <Alltoys></Alltoys>,
                loader: () => fetch('https://toy-kona-server.vercel.app/alltoy')
            },
            {
                path: "/tabone/:id",
                element: <PrivateRouter><Veiwsdetails></Veiwsdetails></PrivateRouter>,
                loader: ({params}) => fetch(`https://toy-kona-server.vercel.app/toy/${params.id}`)
                
            },
            {
                path: "/update/:id",
                element: <Updatetoy></Updatetoy>,
                loader: ({params}) => fetch(`https://toy-kona-server.vercel.app/toy/${params.id}`)
                
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
                
                
            },


        ],
    },

]);

export default router;