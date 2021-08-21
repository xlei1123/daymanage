import React from 'react';
import { connect } from 'dva';
import { IGetInitialProps } from 'umi';
import { Table, Button } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import styles from './index.less';
import { DayListModelState } from './model';
import QueryDay from './components/QueryDay';

interface Iprops {
  day: DayListModelState;
}
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
    width: '38%',
  },
  {
    title: '操作',
    dataIndex: 'btn',
    key: 'btn',
    width: '22%',
    render: () => {
      return (
        <div className={styles.btnWrapper}>
          <Button type="primary">完成</Button>
          <Button type="primary" danger>
            放弃
          </Button>
          <Button>改期</Button>
        </div>
      );
    },
  },
];

function DayList(props: Iprops) {
  const {
    day: { dayList },
  } = props;
  return (
    <>
      <QueryDay />
      <Table columns={columns} dataSource={dayList.list} />;
    </>
  );
}

DayList.getInitialProps = (async (ctx) => {
  const { store } = ctx;
  await store.dispatch({
    type: 'day/getDayList',
  });
  console.log('store.getState()===>', store.getState());
  return store.getState();
}) as IGetInitialProps;

export default connect((rootState) => {
  rootState;
})(DayList);
