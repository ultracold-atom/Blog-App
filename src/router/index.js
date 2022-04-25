import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddArticle from '../views/Add-Article.vue'
import ArticleDetails from '../views/Article-Details.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'Add',
    component: AddArticle
  },  
  {
    path: '/article/:id',
    name: 'Details',
    component: ArticleDetails,
    props: true 
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
