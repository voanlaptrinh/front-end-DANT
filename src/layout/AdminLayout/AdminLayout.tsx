import {
  DesktopOutlined,
  DownOutlined,
  FileOutlined,
  LoginOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, Avatar } from "antd";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./AdminLayout.css";
import "antd/dist/antd.css";
import { isAuthenticate, logout } from "../../api/auth";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
const user = isAuthenticate();

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to={"dashboard"}>Dashboard</Link>, "1", <PieChartOutlined />),
  getItem("Bài tuyển dụng", "2", <DesktopOutlined />, [
    getItem(<Link to={"post"}>Quản lý đăng tin</Link>, "3"),
    getItem(<Link to={"post/news"}>Quản lý CV</Link>, "5"),
    getItem(<Link to={"post/add"}>Đăng tin tuyển dụng </Link>, "2"),
  ]),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "5"),
    getItem("Bill", "6"),
    getItem("Alex", "7"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

type Props = {};

const AdminLayout = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        className="sidebar"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo">itWork for business</div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="header site-layout-background"
          style={{ padding: 15 }}
        >
          <p style={{ marginBottom: 0 }}>Hello, {user.name}</p>
          <Avatar size="large" icon={<UserOutlined />} />
          <Link to="/">
            <a className="" onClick={() => logout()}>
              <LoginOutlined />
            </a>
          </Link>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
