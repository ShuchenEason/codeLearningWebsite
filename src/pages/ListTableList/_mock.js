// eslint-disable-next-line import/no-extraneous-dependencies
import { parse } from 'url';

// mock tableListDataSource
let tableListDataSource = [
  {
    key: 0,
    href: 'https://juejin.cn/post/6844904197595332622',
    name: '浅拷贝与深拷贝',
    desc: 'javascript 复制对象',
  },
  {
    key: 1,
    href: 'https://juejin.cn/post/6844904079974465544',
    name: '前端需要了解的计算机网络知识',
    desc: '图文并茂的计网基础',
  },
  {
    key: 2,
    href: 'https://juejin.cn/post/6929281260045434894',
    name: '常见的web攻击方式及防护方法',
    desc: '整理图解http一书中关于web攻击相关的知识。',
  },
  {
    key: 3,
    href: 'https://juejin.cn/post/7034827130701611016',
    name: '完整过一遍axios，再也不怕写请求',
    desc: 'axios 的各种请求方法',
  },
  {
    key: 4,
    href: 'https://juejin.cn/post/6994629873985650696',
    name: '巩固你的HTTP知识体系',
    desc: '拿下HTTP和HTTPS基础知识',
  },

]

function getRule(req, res, u) {
  let realUrl = u;

  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }

  const { current = 1, pageSize = 10 } = req.query;
  const params = parse(realUrl, true).query;
  let dataSource = [...tableListDataSource].slice((current - 1) * pageSize, current * pageSize);

  if (params.sorter) {
    const sorter = JSON.parse(params.sorter);
    dataSource = dataSource.sort((prev, next) => {
      let sortNumber = 0;
      Object.keys(sorter).forEach((key) => {
        if (sorter[key] === 'descend') {
          if (prev[key] - next[key] > 0) {
            sortNumber += -1;
          } else {
            sortNumber += 1;
          }

          return;
        }

        if (prev[key] - next[key] > 0) {
          sortNumber += 1;
        } else {
          sortNumber += -1;
        }
      });
      return sortNumber;
    });
  }

  if (params.filter) {
    const filter = JSON.parse(params.filter);

    if (Object.keys(filter).length > 0) {
      dataSource = dataSource.filter((item) => {
        return Object.keys(filter).some((key) => {
          if (!filter[key]) {
            return true;
          }

          if (filter[key].includes(`${item[key]}`)) {
            return true;
          }

          return false;
        });
      });
    }
  }

  if (params.name) {
    dataSource = dataSource.filter((data) => data.name.includes(params.name || ''));
  }

  let finalPageSize = 10;

  if (params.pageSize) {
    finalPageSize = parseInt(`${params.pageSize}`, 10);
  }

  const result = {
    data: dataSource,
    total: tableListDataSource.length,
    success: true,
    pageSize: finalPageSize,
    current: parseInt(`${params.currentPage}`, 10) || 1,
  };
  return res.json(result);
}

function postRule(req, res, u, b) {
  let realUrl = u;

  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }

  const body = (b && b.body) || req.body;
  const { name, desc, href, key } = body;

  switch (req.method) {
    /* eslint no-case-declarations:0 */
    case 'DELETE':
      tableListDataSource = tableListDataSource.filter((item) => key.indexOf(item.key) === -1);
      break;

    case 'POST':
      (() => {
        const i = Math.ceil(Math.random() * 10000);
        const newRule = {
          key: tableListDataSource.length,
          href,
          name,
          desc,
        };
        tableListDataSource.unshift(newRule);
        return res.json(newRule);
      })();

      return;

  }

  const result = {
    list: tableListDataSource,
    pagination: {
      total: tableListDataSource.length,
    },
  };
  res.json(result);
}

export default {
  'GET /api/rule': getRule,
  'POST /api/rule': postRule,
  'DELETE /api/rule': postRule,
};
