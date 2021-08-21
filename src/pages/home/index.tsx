// 大盘数据
import React, { useEffect, useState } from 'react';
// 页面组件上的 getInitialProps 静态方法，执行后将结果注入到该页面组件的 props 中
import { IGetInitialProps, history } from 'umi';
import { Card, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import styles from './index.less';

interface Iprops {
  data: {
    title: string;
  };
}
const goList = () => {
  history.push('/dayList');
};
const data = [
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
];
const columns: ColumnsType<object> = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    width: '20%',
  },
  {
    title: '日期',
    dataIndex: 'date',
    key: 'date',
    width: '20%',
  },
  {
    title: '备注',
    dataIndex: 'remark',
    key: 'remark',
    width: '60%',
  },
];
function IndexPage(props: Iprops) {
  // const { data } = props;
  // console.log(props, data); // data 没有值
  return (
    <div className={styles.ScheduleIndex}>
      <div className={styles.todaySchedule}>
        <Card title="今日任务">
          <Table columns={columns} dataSource={data} />;
        </Card>
      </div>
      <div className={styles.otherSchedule}>
        <div className={styles.outDateSchedule}>
          <Card title="过期任务">
            <ul></ul>
          </Card>
        </div>
        <div className={styles.tomorrowSchedule}>
          <Card title="明日任务">
            <ul></ul>
          </Card>
        </div>
      </div>
    </div>
  );
}

IndexPage.getInitialProps = (async (ctx) => {
  console.log(ctx, 1234); // 此方法没有执行
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          todayList: 'Hello World',
          outDateList: '',
          tomorrowList: '',
        },
      });
    }, 300);
  });
}) as IGetInitialProps;

export default IndexPage;
