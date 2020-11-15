import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { menuModels } from '../../models/menu.model';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

export interface SideMenuProps extends RouteComponentProps<{ id?: string }> {
  /** 메뉴 접힘/열림 */
  collapsed: boolean;
  /** 현재 선택 메뉴 dispatch 함수 */
  showMenuTitle: (title: string, index: number) => void;
  /** 현재 선택된 메뉴 */
  currentSelectedMenuIdx?: number;
}

/**
 * Side menu
 */

export const SideMenu: React.FC<SideMenuProps> = ({
  collapsed,
  showMenuTitle,
  history,
}) => {
  const IconForMenuItem: any = {
    1: <UserOutlined />,
    2: <VideoCameraOutlined />,
    3: <UploadOutlined />,
  };

  return (
    <SiteLayoutSider trigger={null} collapsible collapsed={collapsed}>
      <Logo>
        <a href={'/home'}>{!collapsed ? 'LOGO AREA' : ''}</a>
      </Logo>
      <Menu mode="inline" defaultSelectedKeys={['1']}>
        {menuModels.map(menuItem => {
          return (
            <SubMenu
              key={`${menuItem.id}`}
              title={
                <span>
                  {IconForMenuItem[menuItem.id]}
                  <span>{menuItem.title}</span>
                </span>
              }
              onTitleClick={() => {
                showMenuTitle(menuItem.title, menuItem.id);
              }}
            >
              {menuItem.menus.map(item => (
                <Menu.Item
                  key={`${menuItem.title}-${item.id}`}
                  onClick={() => {
                    history?.push(`${item.path}`);
                    // console.log('hihihihi');
                  }}
                >
                  {item.text}
                </Menu.Item>
              ))}
            </SubMenu>
          );
        })}
      </Menu>
    </SiteLayoutSider>
  );
};

const SiteLayoutSider = styled(Sider)`
  border: solid 1px #e5e5e5;
  background: #fff;
`;

const Logo = styled.div`
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  font-family: 'SpoqaHanSans';
  font-size: 18px;
`;

export default withRouter(SideMenu);
