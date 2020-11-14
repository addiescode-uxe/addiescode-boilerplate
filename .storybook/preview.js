import React from 'react';
import GlobalStyle from '../src/styles/globalStyle';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

/**
 * custom view port define
 */
const customViewports = {
  mobile: {
    name: 'mobile',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  pc: {
    name: 'pc',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

/**
 * background define
 */

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: { ...MINIMAL_VIEWPORTS, ...customViewports },
  },
  backgrounds: {
    default: 'twitter',
    values: [
      {
        name: 'twitter',
        value: '#00aced',
      },
      {
        name: 'facebook',
        value: '#3b5998',
      },
    ],
  },
};
