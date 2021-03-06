import { delay } from 'roadhog-api-doc';

const proxy = {
  '/api/homeList': {
    code: 0,
    data: {
      todayList: {
        total: 6,
        list: [
          {
            key: '1',
            name: 'John Brown',
            date: 32,
            remark: 'New York No. 1 Lake Park',
          },
          {
            key: '2',
            name: 'Joe Black',
            date: 42,
            remark: 'London No. 1 Lake Park',
          },
          {
            key: '3',
            name: 'Jim Green',
            date: 32,
            remark: 'Sidney No. 1 Lake Park',
          },
          {
            key: '4',
            name: 'Jim Red',
            date: 32,
            remark: 'London No. 2 Lake Park',
          },
          {
            key: '5',
            name: 'Jim Red xh',
            date: 32,
            remark: 'London No. 2 Lake Park',
          },
          {
            key: '6',
            name: 'xim Red ',
            date: 32,
            remark: 'London No. 2 Lake Park',
          },
        ],
      },
      outDateList: {
        total: 4,
        list: [
          {
            key: '1',
            name: 'John Brown',
            date: 32,
            remark: 'New York No. 1 Lake Park',
          },
          {
            key: '2',
            name: 'Joe Black',
            date: 42,
            remark: 'London No. 1 Lake Park',
          },
          {
            key: '3',
            name: 'Jim Green',
            date: 32,
            remark: 'Sidney No. 1 Lake Park',
          },
          {
            key: '4',
            name: 'Jim Red',
            date: 32,
            remark: 'London No. 2 Lake Park',
          },
        ],
      },
      tomorrowList: {
        total: 4,
        list: [
          {
            key: '1',
            name: 'John Brown',
            date: 32,
            remark: 'New York No. 1 Lake Park',
          },
          {
            key: '2',
            name: 'Joe Black',
            date: 42,
            remark: 'London No. 1 Lake Park',
          },
          {
            key: '3',
            name: 'Jim Green',
            date: 32,
            remark: 'Sidney No. 1 Lake Park',
          },
          {
            key: '4',
            name: 'John Brown',
            date: 32,
            remark: 'New York No. 1 Lake Park',
          },
          {
            key: '5',
            name: 'Joe Black',
            date: 42,
            remark: 'London No. 1 Lake Park',
          },
          {
            key: '6',
            name: 'Jim Green',
            date: 32,
            remark: 'Sidney No. 1 Lake Park',
          },
          {
            key: '7',
            name: 'Joe Black',
            date: 42,
            remark: 'London No. 1 Lake Park',
          },
          {
            key: '8',
            name: 'Jim Green',
            date: 32,
            remark: 'Sidney No. 1 Lake Park',
          },
        ],
      },
    },
  },
};

export default delay(proxy, 200);
