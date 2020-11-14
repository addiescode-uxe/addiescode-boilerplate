import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';

const NoticeCard = () => {
  return (
    <NoticeCardItem title="Notice Card Title" bordered hoverable>
      <p>Notice message</p>
    </NoticeCardItem>
  );
};

const NoticeCardItem = styled(Card)`
  padding: 20px 40px;
  width: 300px;
`;

export default NoticeCard;
