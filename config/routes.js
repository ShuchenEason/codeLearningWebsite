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
    name: 'Todo',
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
    name: 'Star Article',
    icon: 'StarOutlined',
    path: '/listtablelist',
    component: './ListTableList',
  },
  {
    path: '/',
    redirect: '/todo',
  },
  {
    component: './404',
  },
];
