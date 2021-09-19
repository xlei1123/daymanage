import React from 'react';
import { Link } from 'umi';
import { Menu } from 'antd';
import { MENUS } from '@/config/schedule';
const menu = () => {
  const handleClick = () => {
    // console.log(111);
  };
  return (
    <Menu
      onClick={handleClick}
      style={{ width: 200, height: '100vh' }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      theme="dark"
      mode="inline"
    >
      {MENUS.map((menu) => {
        return (
          <Menu.Item key={menu.key}>
            <Link to={menu.link}></Link>
            {menu.label}
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default menu;
