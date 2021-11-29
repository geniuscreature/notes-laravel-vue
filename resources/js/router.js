import VueRouter from 'vue-router'

// Pages
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/user/Dashboard'
import AdminDashboard from './pages/admin/Dashboard'
import Notes from './components/Notes'
import Reminders from './components/Reminders'
import Todo from './components/Todo'

// Routes
const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/register',
    meta: {
      auth: undefined
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      auth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      auth: false
    }
  },
  // USER ROUTES
    {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/notes',
        component: Dashboard,
        meta: {
            auth: true
        },
        children: [
            {
                path: '/dashboard/notes',
                name: 'notes',
                component: Notes
            },
            {
                path: '/dashboard/reminders',
                name: 'reminders',
                component: Reminders
            },
            {
                path: '/dashboard/todo',
                name: 'todo',
                component: Todo
            },
        ]
    },

  // ADMIN ROUTES
  {
    path: '/admin',
    name: 'admin.dashboard',
    component: AdminDashboard,
    meta: {
      auth: {roles: 2, redirect: {name: 'login'}, forbiddenRedirect: '/403'}
    }
  },
]

const router = new VueRouter({
  history: true,
  mode: 'history',
  routes,
})

export default router
