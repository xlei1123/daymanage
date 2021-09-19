// 大盘数据
import React, { useEffect, useState } from 'react';
// 页面组件上的 getInitialProps 静态方法，执行后将结果注入到该页面组件的 props 中
import { IGetInitialProps, history } from 'umi';
import { connect } from 'dva';
import { Card } from 'antd';
import styles from './index.less';
import { IndexModelState } from './model';
import TodayTable from './components/TodayTable';
import OutDateTable from './components/OutDateTable';
import TomorrowTable from './components/TomorrowTable';
interface Iprops {
  home: IndexModelState;
}
const goList = () => {
  history.push('/dayList');
};
function IndexPage(props: Iprops) {
  const { home: { todayList, outDateList, tomorrowList } = {} } = props;
  return (
    <div className={styles.ScheduleIndex}>
      <div className={styles.todaySchedule}>
        <Card title="今日任务">
          <TodayTable todayList={todayList} />
        </Card>
      </div>
      <div className={styles.otherSchedule}>
        <div className={styles.outDateSchedule}>
          <Card title="过期任务">
            <OutDateTable outDateList={outDateList} />
          </Card>
        </div>
        <div className={styles.tomorrowSchedule}>
          <Card title="明日任务">
            <TomorrowTable tomorrowList={tomorrowList} />
          </Card>
        </div>
      </div>
    </div>
  );
}

IndexPage.getInitialProps = (async (ctx) => {
  const { store } = ctx;
  await store.dispatch({
    type: 'home/getTodayList',
  });
  return store.getState();
}) as IGetInitialProps;

export default connect((rootState) => ({
  rootState,
}))(IndexPage);
