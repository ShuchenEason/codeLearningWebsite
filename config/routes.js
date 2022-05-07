export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        component: './404',
      },
    ],
  },
  {
    name: 'todo',
    icon: 'UnorderedListOutlined',
    path: '/todo',
    component: './Todo',
  },
  {
    name: 'Recommand website',
    icon: 'smile',
    path: '/listcardlist',
    component: './ListCardList',
  },
  {
    name: '搜索列表（项目）',
    icon: 'smile',
    path: '/listsearchprojects',
    component: './ListSearchProjects',
  },
  {
    path: '/',
    redirect: '/todo',
  },
  {
    component: './404',
  },
];
