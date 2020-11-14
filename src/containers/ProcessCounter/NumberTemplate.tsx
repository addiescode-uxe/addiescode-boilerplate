import React, { useState } from 'react';
import { Steps, Divider } from 'antd';
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { List } from 'antd/lib/form/Form';
import {
  INCREMENT,
  DECREMENT,
  INCREMENT_BY_AMOUNT,
} from '../../store/counter/counter.module';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentNum } from '~store/counter/counter.selector';

const { Step } = Steps;

const NumberTemplate = () => {
  const currentIdx = useSelector(selectCurrentNum);
  const dispatch = useDispatch();

  const [currentInputNum, setCurrentInputNum] = useState(0);

  const stageMapper: any = {
    0: 'finish',
    1: 'process',
    2: 'wait',
  };

  const mixYourNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setCurrentInputNum(Number(value));
  };

  return (
    <StepProcessedContents>
      <ul>
        <li>
          <button onClick={() => dispatch(INCREMENT())}>Add Stage</button>
        </li>

        <li>
          <button onClick={() => dispatch(DECREMENT())}>Subtracts Stage</button>
        </li>
        <li>
          <button
            onClick={() => dispatch(INCREMENT_BY_AMOUNT(currentInputNum))}
          >
            Add your Stage
          </button>
          <input
            type="text"
            placeholder="+- 최대 2"
            onChange={e => mixYourNum(e)}
            style={{ border: '1px solid #1b1b1b', marginLeft: '12px' }}
          />
        </li>
      </ul>

      <Steps
        direction="vertical"
        current={currentIdx}
        style={{ marginTop: '32px' }}
      >
        {currentIdx >= 0 && (
          <Step
            status={stageMapper[currentIdx]}
            title="Login"
            icon={<UserOutlined />}
          />
        )}
        {currentIdx >= 1 && (
          <Step
            status={stageMapper[currentIdx]}
            title="Verification"
            icon={<SolutionOutlined />}
          />
        )}
        {currentIdx >= 2 && (
          <Step
            status={stageMapper[currentIdx]}
            title="Pay"
            icon={<LoadingOutlined />}
          />
        )}
      </Steps>
    </StepProcessedContents>
  );
};

export const StepProcessedContents = styled.div``;
export const ListLayoutContents = styled(List)``;

export default NumberTemplate;
