// 大盘数据
import React from 'react';
import { Table, Button } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { IndexModelState } from '../model';
import styles from '../index.less';
interface Iprops {
  todayList: IndexModelState['todayList'];
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
function todayTable(props: Iprops) {
  const { todayList } = props;
  return <Table columns={columns} dataSource={todayList.list} />;
}

export default todayTable;