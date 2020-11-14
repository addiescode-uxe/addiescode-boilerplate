import React, { useState } from 'react';
import SideMenu from '~components/Menus/SideMenu';
import LogoHeader from '~components/Header/LogoHeader';
import IncFooter from '~components/Footer/Footer';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~store/configureStore';
import { getSubMenuTitle } from '~store/sideMenu/sideMenu.reducer';

import { Layout, Row, Col } from 'antd';
import styled from 'styled-components';

const { Content } = Layout;

const MainTemplate: React.FC = props => {
  const [collapsed, setCollapsed] = useState(false);
  const [currentSelectedMenuIdx, setCurrentSelectedMenuIdx] = useState(0);

  const subMenuTitle = useSelector(
    (state: RootState) => state.sideMenu.sideMenuTitle
  );
  const dispatch = useDispatch();

  const showMenuTitle = (title: string, menuIndex: number) => {
    setCurrentSelectedMenuIdx(menuIndex);
    dispatch(getSubMenuTitle(title));
  };

  return (
    <Row>
      <Col span={24}>
        <Layout style={{ height: '100vh' }}>
          <SideMenu
            collapsed={collapsed}
            showMenuTitle={showMenuTitle}
            currentSelectedMenuIdx={currentSelectedMenuIdx}
          />
          <SiteLayoutCont>
            <LogoHeader
              headerTxt={subMenuTitle}
              collapsed={collapsed}
              setCollapsed={setCollapsed}
            ></LogoHeader>
            <StyledContent>{props.children}</StyledContent>
          </SiteLayoutCont>
        </Layout>
        <IncFooter />
      </Col>
    </Row>
  );
};

const SiteLayoutCont = styled(Layout)`
  background: #fff;
`;

const StyledContent = styled(Content)`
  padding: 20px 40px;
`;

export default MainTemplate;
