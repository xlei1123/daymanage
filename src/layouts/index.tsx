import React, { ReactNode } from 'react';
import { Layout, Card } from 'antd';
import Menu from '@/components/Menu';
import styles from './index.less';
const { Header, Footer, Sider, Content } = Layout;

interface IProps {
  children: ReactNode;
}

const layout = (props: IProps) => {
  return (
    <Layout className={styles.layout}>
      <Sider>
        <Menu />
      </Sider>
      <Layout>
        {/* <Header>Header</Header> */}
        <Content>
          <Card bodyStyle={{ minHeight: 'calc(100vh - 70px)' }}>
            {props.children}
          </Card>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default layout;
