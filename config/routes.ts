export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/use-request',
              },
              {
                path: '/use-request',
                name: 'useRequest',
                authority: ['admin'],
                routes: [
                  {
                    path: '/use-request',
                    redirect: '/use-request/default-request',
                  },
                  {
                    path: '/use-request/default-request',
                    name: 'defaultRequest',
                    component: './UseRequest/DefaultRequest',
                    authority: ['admin'],
                  },
                  {
                    path: '/use-request/manual-trigger',
                    name: 'manualTrigger',
                    component: './UseRequest/ManualTrigger',
                    authority: ['admin'],
                  },
                  {
                    path: '/use-request/polling',
                    name: 'polling',
                    component: './UseRequest/Polling',
                    authority: ['admin'],
                  },
                  {
                    path: '/use-request/concurrent-request',
                    name: 'concurrentRequest',
                    component: './UseRequest/ConcurrentRequest',
                    authority: ['admin'],
                  },
                  {
                    path: '/use-request/dependent-request',
                    name: 'dependentRequest',
                    component: './UseRequest/DependentRequest',
                    authority: ['admin'],
                  },
                ],
              },
              {
                path: '/use-antd-table',
                name: 'useAntdTable',
                authority: ['admin'],
                routes: [
                  {
                    path: '/use-antd-table/form-table',
                    name: 'formTable',
                    component: './UseAntdTable/FormTable',
                    authority: ['admin'],
                  },
                ],
              },
              {
                path: '/use-dynamic-list',
                name: 'useDynamicList',
                authority: ['admin'],
                component: './UseDynamicList',
              },
              {
                path: '/use-local-storage-state',
                name: 'useLocalStorageState',
                authority: ['admin'],
                component: './UseLocalStorageState',
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
