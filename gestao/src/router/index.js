import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventForm from '../views/EventForm.vue'
import EventDetails from '../views/EventDetails.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
  },
  {
    path: '/events/new',
    name: 'EventForm',
    component: EventForm,
  },
  {
    path: '/events/:id',
    name: 'EventDetails',
    component: EventDetails,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
