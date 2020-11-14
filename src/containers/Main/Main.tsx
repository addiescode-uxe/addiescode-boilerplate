import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Button, Space } from 'antd';

import { HelloButton } from '~components/Buttons/HelloButton';
import NoticeCards from '~components/Cards/NoticeCards';
import MainTemplate from './customs/MainTemplate';

const MainContainer: React.FC<RouteComponentProps> = props => {
  return (
    <MainTemplate>
      <Space direction="vertical" size={'large'}>
        <div>
          Customized Button:
          <HelloButton />
          <br />
          <br />
          Ant Design Button:
          <Button type="primary">AntD Button</Button>
          <br />
          <br />
          TRY PROCESS COUNTER!
          <Button
            type="primary"
            onClick={() => props.history.push('/processCounter')}
          >
            Go to check
          </Button>
        </div>
        <NoticeCards />
      </Space>
    </MainTemplate>
  );
};

export default withRouter(MainContainer);
