import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [{
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [{
      path: '/redirect/:path*',
      component: () => import('@/views/redirect/index')
    }]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: '江苏乐众管理后台',
        icon: 'dashboard',
        breadcrumb: false
      }
    }]
  }
]

export const asyncRoutes = [{
    path: '/user',
    component: Layout,
    name: 'User',
    meta: {
      title: '用户管理',
      icon: 'user',
      breadcrumb: false
    },
    children: [{
        path: 'user-list',
        component: () => import('@/views/user/user-list'),
        name: 'UserList',
        meta: {
          title: '用户列表'
        }
      },
      {
        path: 'pusher',
        component: () => import('@/views/user/pusher'),
        name: 'Pusher',
        meta: {
          title: '后台添加推手'
        }
      }
    ]
  },

  {
    path: '/store',
    component: Layout,
    name: 'Store',
    meta: {
      title: '商家管理',
      icon: 'store',
      breadcrumb: false
    },
    children: [{
        path: 'store-list',
        component: () => import('@/views/store/store-list'),
        name: 'StoreList',
        meta: {
          title: '商家列表'
        }
      },
      {
        path: 'product-list',
        component: () => import('@/views/store/product-list'),
        name: 'ProductList',
        meta: {
          title: '商品列表'
        }
      }
    ]
  },
  {
    path: '/account',
    component: Layout,
    name: 'Account',
    meta: {
      title: '财务管理',
      icon: 'account',
      breadcrumb: false,
      roles: ['account/worker-deposit', 'account/worker-withdraw', 'account/user-deposit', 'account/success-order']
    },
    children: [{
        path: 'coupon',
        component: () => import('@/views/account/coupon'),
        name: 'Coupon',
        meta: {
          roles: ['account/coupon'],
          title: '优惠券'
        }
      }, {
        path: 'pay-log',
        component: () => import('@/views/account/pay-log'),
        name: 'PayLog',
        meta: {
          roles: ['account/pay-log'],
          title: '付款流水'
        }
      },
      {
        path: 'order-list',
        component: () => import('@/views/account/order-list'),
        name: 'OrderList',
        meta: {
          roles: ['account/order-list'],
          title: '订单列表'
        }
      },
      {
        path: 'pusher-cash',
        component: () => import('@/views/account/pusher-cash'),
        name: 'PusherCash',
        meta: {
          roles: ['account/pusher-cash'],
          title: '推手提现'
        }
      },
      {
        path: 'store-cash',
        component: () => import('@/views/account/store-cash'),
        name: 'StoreCash',
        meta: {
          roles: ['account/store-cash'],
          title: '商家提现'
        }
      }
    ]
  },

  {
    path: '/admin',
    component: Layout,
    name: 'Admin',
    meta: {
      roles: ['admin', 'role', 'permission'],
      title: '员工管理',
      icon: 'admin',
      breadcrumb: false
    },
    children: [{
        path: 'admin',
        component: () => import('@/views/admin/admin'),
        name: 'AdminList',
        meta: {
          roles: ['admin'],
          title: '管理员'
        }
      },
      {
        path: 'role',
        component: () => import('@/views/admin/role'),
        name: 'Role',
        meta: {
          roles: ['role'],
          title: '角色管理'
        }
      },
      {
        path: 'permission',
        component: () => import('@/views/admin/permission'),
        name: 'Permission',
        meta: {
          roles: ['permission'],
          title: '权限管理'
        }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    name: 'System',
    meta: {
      title: '系统设置',
      icon: 'setting',
      breadcrumb: false
    },
    children: [{
        path: 'base',
        component: () => import('@/views/system/base'),
        name: 'Base',
        meta: {
          title: '基本设置'
        }
      },
      {
        path: 'category',
        component: () => import('@/views/system/category'),
        name: 'Category',
        meta: {
          title: '分类管理'
        }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
