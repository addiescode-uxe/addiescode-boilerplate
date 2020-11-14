import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const { Header } = Layout;

interface LogoHeaderProps {
  headerTxt: string;
  collapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void;
  route?: RouteComponentProps;
}

const LogoHeader: React.FC<LogoHeaderProps> = ({
  headerTxt,
  collapsed,
  setCollapsed,
  route,
}) => {
  /**
   * pathName 정보 추가
   */
  console.log(route?.location.pathname);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <SiteLayoutHeader>
      {collapsed && <CollapseMenuToggler onClick={toggle} />}
      {!collapsed && <CollapsedMenuToggler onClick={toggle} />}
      {headerTxt}
    </SiteLayoutHeader>
  );
};

const SiteLayoutHeader = styled(Header)`
  background: #fff;
  padding: 0;
  height: 64px;
  font-family: 'SpoqaHanSans';
  font-size: 16px;
`;

const CollapseMenuToggler = styled(MenuUnfoldOutlined)`
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #1890ff;
  }
`;

const CollapsedMenuToggler = styled(MenuFoldOutlined)`
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #1890ff;
  }
`;
export default LogoHeader;
