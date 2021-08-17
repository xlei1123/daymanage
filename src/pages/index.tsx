// 大盘数据

import React, { useEffect } from 'react';
// 页面组件上的 getInitialProps 静态方法，执行后将结果注入到该页面组件的 props 中
import { IGetInitialProps, history } from 'umi';
import styles from './index.less';

interface Iprops {
  data: {
    title: string;
  };
}
const goList = () => {
  history.push('/dayList');
};
function IndexPage(props: Iprops) {
  const { data } = props;
  console.log(props, data); // data 没有值

  return (
    <div>
      {data ? (
        <h1 className={styles.title}>{data.title}</h1>
      ) : (
        <div>正在加载...</div>
      )}
      <button onClick={goList}>跳转到列表</button>
    </div>
  );
}

IndexPage.getInitialProps = (async (ctx) => {
  console.log(ctx, 1234); // 此方法没有执行
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          title: 'Hello World',
        },
      });
    }, 300);
  });
}) as IGetInitialProps;

export default React.memo(IndexPage);
