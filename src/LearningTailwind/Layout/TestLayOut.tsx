import { Flex, Layout, Menu, MenuProps } from 'antd';
import React, { useState } from 'react';
import {
  AppstoreOutlined,
  LaptopOutlined,
  MailOutlined,
  NotificationOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';

const TestLayOut = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: 'black',
    height: 64,
    paddingInline: 48,
    zIndex: 1,
    lineHeight: '64px',
    backgroundColor: '#fff',
  };
  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: `calc(100vh - (${headerStyle.height}px))`,
    lineHeight: '120px',
    width: '150px',
    marginTop: `calc(${headerStyle.height}px)`,
    color: '#fff',
    backgroundColor: '#fff',
  };
  const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    marginTop: `calc(${headerStyle.height}px)`,
    color: 'black',
    backgroundColor: '#1677ff',
  };
  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: 'black',
    backgroundColor: '#fff',
  };
  const LayoutStyle: React.CSSProperties = {
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
  };
  type MenuItem = Required<MenuProps>['items'][number];
  const items: MenuItem[] = [
    {
      label: 'Navigation One',
      key: 'email',
      icon: <MailOutlined />,
    },
    {
      label: 'Navigation Two',
      key: 'app',
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: 'Navigation Three-Submenu',
      key: 'submenu',
      icon: <SettingOutlined />,
      children: [
        {
          type: 'group',
          label: 'group 1',
          children: [
            {
              label: 'option 1',
              key: 'setting 1',
            },
            {
              label: 'option 2',
              key: 'setting 2',
            },
          ],
        },
        {
          type: 'group',
          label: 'group 2',
          children: [
            {
              label: 'option 3',
              key: 'setting 3',
            },
            {
              label: 'option 4',
              key: 'setting 4',
            },
          ],
        },
      ],
    },
    {
      key: 'alipay',
      label: <a href="#">Navigation Link</a>,
    },
  ];
  const items2: MenuProps['items'] = [
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  ].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });
  const Nav: React.FC = () => {
    const [current, setCurrent] = useState('mail');
    const onClick: MenuProps['onClick'] = (e) => {
      //       console.log('click ', e);
      setCurrent(e.key);
    };
    return (
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        className="fixed left-0 w-screen"
      />
    );
  };
  return (
    <Flex gap="middle" wrap>
      <Layout style={LayoutStyle}>
        <Header className="fixed left-0 right-0 top-0" style={headerStyle}>
          <Nav />
        </Header>
        <Layout>
          <Sider style={siderStyle} width="25%">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', width: '100%' }}
              items={items2}
              className="bg-white"
            />
          </Sider>
          <Content
            className="mt-[$(headerStyle.height)] flex items-center justify-center"
            style={contentStyle}
          >
            Content
          </Content>
        </Layout>
        <Footer className="fixed bottom-0 left-0 right-0" style={footerStyle}>
          Footer
        </Footer>
      </Layout>
    </Flex>
  );
};

export default TestLayOut;
