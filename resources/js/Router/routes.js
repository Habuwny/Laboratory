import Home from "../Pages/Home.vue";
import About from "../Pages/About.vue";
import {Register} from '../Pages'

const routes = [
    {
        path: '',
        component: Home,
        name: 'Home'

    },
     {
        path: 'about',
        component:  About,
        name: 'about'
    },
     {
        path: 'register',
        component:  Register,
        name: 'register'
    },


]
export default routes
