// eslint-disable-next-line import/no-extraneous-dependencies
const titles = [
  'React',
  'MDN',
  'Ant Design',
  'Ant Design Pro',
  'Webpack',
  'Tailwindcss',
  'Vue',
  'Github',
  'Juejin',
  'CSDN',
  'Bilibili',
  'Leetcode',
];
const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4431/mdn.png', // MDN
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', // AntD pro
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
  'https://www.tailwindcss.cn/apple-touch-icon.png', // Tailwindcss
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610896059065-9919.png', // Github
  'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610941467025-juejin(1).png', // Juejin
  'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/src=http _img3.doubanio.com_lpic_s26866793.jpg&refer=http _img3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg.jpg', // CSDN
  'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610687628081-bilibili.png', // Blibili
  'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1609848636738-IMG_1307(20210105-200954).JPG', // Leetcode
];
const desc = [
  'React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据变动时 React 能高效更新并渲染合适的组件。',
  'MDN 为零基础的初学者提供一个实用的 Web 开发入门教程，前端梦开始的地方',
  'Ant Design 设计价值观为设计者提供评价设计好坏的内在标准，启示并激发了 Ant Design 设计原则和设计模式，进而为具体设计问题提供向导和一般解决方案。',
  'Ant Design Pro 在力求提供开箱即用的开发体验，为此我们提供完整的脚手架，涉及国际化，权限，mock，数据流，网络请求等各个方面。为这些中后台中常见的方案提供了最佳实践来减少学习和开发成本。',
  'webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。',
  'Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计。',
  'Vue 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面，无论任务是简单还是复杂。',
  'GitHub 是一个面向开源及私有 软件项目的托管平台，除了 Git 代码仓库托管及基本的 Web 管理界面以外，还提供了订阅、讨论组、文本渲染、在线文件编辑器、协作图谱（报表）、代码片段分享（Gist）等功能',
  '掘金是一个帮助开发者成长的社区,是给开发者用的 Hacker News,给设计师用的 Designer News,和给产品经理用的 Medium。',
  'CSDN是全球知名中文IT技术交流平台,创建于1999年,包含原创博客、精品问答、职业培训、技术论坛、资源下载等产品服务,提供原创、优质、完整内容的专业IT技术开发社区。',
  'Bilibili 是国内知名的视频弹幕网站,这里有及时的动漫新番,活跃的ACG氛围,有创意的Up主。拥有无数优质课程。',
  '力扣 LeetCode ，全球 IT 人才职业技能成长平台，提供海量技术面试资源，助你高效提升编程技能，轻松拿下 IT 名企 Dream Offer。',
];

function fakeList(count) {
  const list = [];

  for (let i = 0; i < count; i += 1) {
    list.push({
      id: `fake-list-${i}`,
      title: titles[i % 8],
      avatar: avatars[i % 8],
      percent: Math.ceil(Math.random() * 50) + 50,
      logo: avatars[i % 8],
      href: 'https://ant.design',
      updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
      createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
      description:desc[i % 5],
      newUser: Math.ceil(Math.random() * 1000) + 1000,
      star: Math.ceil(Math.random() * 100) + 100,
      like: Math.ceil(Math.random() * 100) + 40,
      message: Math.ceil(Math.random() * 10) + 10,
    });
  }

  return list;
}

function getFakeList(req, res) {
  const params = req.query;
  const count = Number(params.count) * 1 || 20;
  const result = fakeList(count);
  return res.json({
    data: {
      list: result,
    },
  });
}

export default {
  'GET  /api/card_fake_list': getFakeList,
};
