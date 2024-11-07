
import { Routes} from 'react-router-don';

import Route from './Route';

import Signin from '../pages/Signin';

import Signup from '../pages/Signup';

import Dashboard from '../pages/Dashboard';


export default function Rota(){
return(
<Routes>
    <Route exact path= "/" component (Signin) />
    <Route exact path= "/register" component (Signup) />
   
    <Route exact path= "/dashboard" component = (Dashboard) isPrivate />

</Routes>
)
}