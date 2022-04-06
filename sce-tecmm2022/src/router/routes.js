
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/help', component: () => import('pages/Ayuda.vue') },
      { path: '/profesores', component: () => import('pages/profesores/index.vue') },
      { path: '/newprofesor', component: () => import('pages/profesores/new.vue') },
      { path: '/editprofesor', component: () => import('pages/profesores/edit.vue') },
      { path: '/estudiantes', component: () => import('pages/estudiantes/index.vue') },
      { path: '/newestudiante', component: () => import('pages/estudiantes/new.vue') },
      { path: '/editestudiante', component: () => import('pages/estudiantes/edit.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
