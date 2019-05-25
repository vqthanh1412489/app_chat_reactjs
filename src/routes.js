import React from 'react';
import Login from './pages/Login/index';
import SignUp from './pages/SignUp/index';
import NotFound from './pages/NotFound/index';
import Home from './pages/Home/index';

const routes = [
    {
        path: '/',
        exact: true,
        main: ({history}) => <Login history={history}/>        
    },
    {
        path: '/home',
        exact: false,
        main: ({history}) => <Home history={history}/>
    },
    {
        path: '/signin',
        exact: false,
        main: ({history}) => <Login history={history}/>
    },
    {
        path: '/signup',
        exact: false,
        main: ({history}) => <SignUp history={history}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound/>
    },
]

export default routes;