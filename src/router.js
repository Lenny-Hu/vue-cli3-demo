import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '*',
      name: 'notFound',
      component: { template: '<div>404</div>' }
    }
  ]
})

router.beforeEach(({ meta, path }, from, next) => {
  window.scroll(0, 0)
  console.log(meta, path, from, next)
  // // 授权相关
  // if (!fns.authorize(meta.access)) {
  //   if (fns.isLoggedIn() && meta.access.level === 'anon') {
  //     return next({ path: '/home' })
  //   } else if (!fns.isLoggedIn()) {
  //     utils.toast.warn('请先登陆后再访问')
  //     // 如果用户未登陆访问页面，那么记录URL到cookie
  //     if (path !== '/' && path !== '/home') {
  //       jsCookie.set('startHere', path)
  //     }
  //     return next({ path: '/' })
  //   } else {
  //     utils.toast.warn('没有权限访问此页面，即将重定向到首页')
  //     return next({ path: '/' })
  //   }
  // }
  // // 如果用户已登陆，并且cookie中保存了要跳转的url，那么跳转到url，然后删除cookie
  // // 假如未登录访问管理员页面，会记录这个地址到cookie，但当你使用普通用户登陆后，此处会重定向到管理员页面，但通不过上方的权限检查，所以还是被会路由拦截
  // if (fns.isLoggedIn()) {
  //   let startHere = jsCookie.get('startHere')
  //   if (startHere) {
  //     jsCookie.remove('startHere')
  //     return next({ path: startHere })
  //   }
  // }
  // document.title = meta.title
  next()
})

export default router

