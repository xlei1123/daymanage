// 左侧导航
export const MENUS = [
  {
    label: '主页',
    link: '/home',
    key: 'home',
  },
  {
    label: '日程管理',
    link: '/dayList',
    key: 'dayList',
  },
  {
    label: '新建日程',
    link: '/newSchedule',
    key: 'newSchedule',
  },
];

// 重复方式
export const REPEATCONFIG = [
  {
    label: '一次性活动',
    value: '1',
  },
  {
    label: '每天',
    value: '2',
  },
  {
    label: '每周',
    value: '3',
  },
  {
    label: '每月',
    value: '4',
  },
  {
    label: '每年',
    value: '5',
  },
];
// 结束方式  暂时不用  目前只做结束时间
export const STOPREPEATCONFIG = [
  {
    label: '用不',
    value: '1',
  },
  {
    label: '时间',
    value: '2',
  },
  {
    label: '次数',
    value: '3',
  },
];
