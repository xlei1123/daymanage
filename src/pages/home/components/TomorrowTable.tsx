// 大盘数据
import React from 'react';
import { Table, Button } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { IndexModelState } from '../model';
import styles from '../index.less';
interface Iprops {
  tomorrowList: IndexModelState['tomorrowList'] | undefined;
}
const columns: ColumnsType<object> = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    width: '30%',
  },
  {
    title: '日期',
    dataIndex: 'date',
    key: 'date',
    width: '30%',
  },
  {
    title: '操作',
    dataIndex: 'btn',
    key: 'btn',
    width: '40%',
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
function todayTable(props: Iprops) {
  const { tomorrowList } = props;
  return (
    <Table
      columns={columns}
      dataSource={tomorrowList?.list}
      scroll={{ y: '50vh' }}
      pagination={false}
    />
  );
}

export default todayTable;
