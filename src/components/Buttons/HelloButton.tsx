import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { text } from '@storybook/addon-knobs';

export interface HelloProps {
  /** 텍스트 컬러 customize */
  color?: string;
  /** 텍스트 스타일 - italic */
  italic?: string;
  /** 텍스트 스타일 - underline */
  underline?: string;
}

/**
 * Primary Button
 */

export const HelloButton: React.FC<HelloProps> = props => {
  const { color, italic, underline } = props;

  /**
   * knobs 설정: const value = boolean(label, defaultValue, groupId);
   */
  const textInput = text('Hello button Text', 'Hello!', 'HelloButton');

  const [buttonMsg, setButtonMsg] = useState('Click me!');

  const handleBtnClick = () => {
    setButtonMsg('Confirmed');
  };

  return (
    <>
      <ColorizedInfoBox
        color={color}
        italic={italic}
        underline={underline}
        onClick={handleBtnClick}
        buttonMsg={buttonMsg}
      >
        {textInput}
      </ColorizedInfoBox>
    </>
  );
};

interface HelloBtnStyleProps {
  color?: string;
  italic?: string;
  underline?: string;
  buttonMsg?: string;
}

const ColorizedInfoBox = styled.button<HelloBtnStyleProps>`
  margin-left: 4px;
  ${({ color, italic, underline, buttonMsg }) => css`
    color: ${buttonMsg === 'Confirmed' ? 'green' : color};
    font-style: ${italic && 'italic'};
    text-decoration: ${underline && 'underline'};
    background: #f2f2f2;
    padding: 12px;
    border-radius: 6px;
  `}
`;
