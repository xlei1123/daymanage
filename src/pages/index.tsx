// 大盘数据

// 页面组件上的 getInitialProps 静态方法，执行后将结果注入到该页面组件的 props 中
import { IGetInitialProps } from 'umi';
import styles from './index.less';

interface Iprops {
  data: {
    title: string;
  };
}

function IndexPage(props: Iprops) {
  const { data } = props;
  return (
    <div>
      <h1 className={styles.title}>{data.title}</h1>
    </div>
  );
}

IndexPage.getInitialProps = (async () => {
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

export default IndexPage;
