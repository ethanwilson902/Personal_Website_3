import { createRouter, createWebHistory } from 'vue-router';
import PortfolioEthan from '../components/PortfolioEthan.vue';
import BioEthan from '../components/BioEthan.vue';

const routes = [
  { path: '/portfolio', component: PortfolioEthan },
  { path: '/bio', component: BioEthan }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
