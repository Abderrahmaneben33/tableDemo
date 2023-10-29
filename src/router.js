import { createRouter,createWebHistory } from "vue-router"

import CadrView from './Views/CadrView.vue';
import tableView from './Views/tableView.vue';

const routes = [
  { path: '/CadrView', component: CadrView },
  { path: '/tableView', component: tableView },
]

 const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),
     mode: 'history',
     routes, // short for `routes: routes`
 })


export default router;
